/* eslint-disable @typescript-eslint/no-require-imports -- Standalone CommonJS smoke check. */
const { chromium } = require('playwright');
const path = require('node:path');
const fs = require('node:fs');

const baseURL = process.env.HERO_URL || 'https://escalabusiness.company';
const output = path.resolve(__dirname, '..', 'artifacts', 'hero-live-smoke');
fs.mkdirSync(output, { recursive: true });

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
  });
  try {
    for (const [label, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844], ['small-mobile', 320, 740]]) {
      const page = await browser.newPage({ viewport: { width, height }, reducedMotion: 'reduce' });
      const response = await page.goto(baseURL, { waitUntil: 'domcontentloaded', timeout: 30000 });
      const mark = page.locator('.hero-artifact-symbol');
      const environment = page.locator('.hero-environment-image');
      await mark.waitFor({ state: 'visible', timeout: 15000 });
      await Promise.all([mark, environment].map(locator => locator.evaluate(image => Promise.race([
        image.decode(),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Image decode timeout')), 60000)),
      ]))));
      const state = await page.evaluate(() => ({
        markLoaded: document.querySelector('.hero-artifact-symbol')?.naturalWidth > 0,
        environmentLoaded: document.querySelector('.hero-environment-image')?.naturalWidth > 0,
        overflow: document.documentElement.scrollWidth > innerWidth,
        artifactVisible: (() => {
          const artifact = document.querySelector('.hero-artifact-front').getBoundingClientRect();
          const ticker = document.querySelector('.hero-ticker').getBoundingClientRect();
          return artifact.width > 150 && artifact.height > 200 && artifact.top < ticker.top - 100;
        })(),
      }));
      await page.screenshot({ path: path.join(output, `${label}.png`), animations: 'disabled' });
      console.log(JSON.stringify({ label, status: response.status(), ...state }));
      if (response.status() !== 200 || !state.markLoaded || !state.environmentLoaded || state.overflow || !state.artifactVisible) {
        throw new Error(`${label}: hero smoke check failed`);
      }
      await page.close();
    }

    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(baseURL, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1200);
    const control = page.getByRole('button', { name: 'Activar la escena de ESCALA' });
    const environment = page.locator('.hero-environment');
    const artifact = page.locator('.hero-artifact-object');
    const firstFrame = await environment.evaluate(element => getComputedStyle(element).transform);
    await page.waitForTimeout(750);
    const environmentMoves = firstFrame !== await environment.evaluate(element => getComputedStyle(element).transform);
    await page.screenshot({ path: path.join(output, 'desktop-moving.png') });
    await control.hover({ position: { x: 230, y: 115 } });
    const bounds = await control.boundingBox();
    await page.mouse.move(bounds.x + 205, bounds.y + 90, { steps: 4 });
    await page.waitForTimeout(100);
    const tilt = await artifact.getAttribute('style');
    const pointerTilt = !!tilt && !tilt.includes('rotateX(0deg) rotateY(0deg)');
    await control.click();
    const clickPulse = await control.evaluate(element => element.classList.contains('is-active'));
    await page.waitForTimeout(950);
    await control.focus();
    await page.keyboard.press('Enter');
    const keyboardPulse = await control.evaluate(element => element.classList.contains('is-active'));
    console.log(JSON.stringify({ label: 'interaction-desktop', environmentMoves, pointerTilt, clickPulse, keyboardPulse }));
    if (!environmentMoves || !pointerTilt || !clickPulse || !keyboardPulse) throw new Error('Desktop interaction failed');
    await page.close();

    const touchPage = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
    await touchPage.goto(baseURL, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await touchPage.waitForTimeout(1200);
    const touchControl = touchPage.getByRole('button', { name: 'Activar la escena de ESCALA' });
    await touchControl.tap();
    const touchPulse = await touchControl.evaluate(element => element.classList.contains('is-active'));
    console.log(JSON.stringify({ label: 'interaction-mobile', touchPulse }));
    if (!touchPulse) throw new Error('Mobile tap did not activate the scene');
    await touchPage.close();
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
