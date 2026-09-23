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
      const mark = page.locator('.hero-mark-face');
      await mark.waitFor({ state: 'visible', timeout: 15000 });
      await mark.evaluate(image => Promise.race([
        image.decode(),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Image decode timeout')), 15000)),
      ]));
      const state = await page.evaluate(() => ({
        markLoaded: document.querySelector('.hero-mark-face')?.naturalWidth > 0,
        overflow: document.documentElement.scrollWidth > innerWidth,
        podiumVisible: (() => {
          const front = document.querySelector('.hero-mark-podium path:nth-of-type(2)').getBoundingClientRect();
          const ticker = document.querySelector('.hero-ticker').getBoundingClientRect();
          return front.height > 20 && front.top < ticker.top - 20;
        })(),
      }));
      await page.screenshot({ path: path.join(output, `${label}.png`), animations: 'disabled' });
      console.log(JSON.stringify({ label, status: response.status(), ...state }));
      if (response.status() !== 200 || !state.markLoaded || state.overflow || !state.podiumVisible) {
        throw new Error(`${label}: hero smoke check failed`);
      }
      await page.close();
    }

    const interactivePage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await interactivePage.goto(baseURL, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await interactivePage.waitForTimeout(1200);
    const control = interactivePage.getByRole('button', { name: 'Girar el símbolo tridimensional de ESCALA' });
    const world = interactivePage.locator('.hero-mark-world');
    await control.hover({ position: { x: 280, y: 120 } });
    const bounds = await control.boundingBox();
    await interactivePage.mouse.move(bounds.x + 260, bounds.y + 90, { steps: 4 });
    await interactivePage.waitForTimeout(100);
    const tilt = await world.getAttribute('style');
    const pointerTilt = !!tilt && !tilt.includes('rotateX(0deg) rotateY(0deg)');
    await control.click();
    await interactivePage.waitForTimeout(420);
    const midSpin = await world.evaluate(element => getComputedStyle(element).transform);
    await interactivePage.screenshot({ path: path.join(output, 'desktop-spinning.png') });
    await interactivePage.waitForTimeout(1250);
    const clickTurn = await world.evaluate(element => !element.classList.contains('is-spinning') && element.style.transform.includes('360deg'));
    await control.focus();
    await interactivePage.keyboard.press('Enter');
    await interactivePage.waitForTimeout(1450);
    const keyboardTurn = await world.evaluate(element => element.style.transform.includes('720deg'));
    console.log(JSON.stringify({ label: 'interaction-desktop', pointerTilt, midSpin, clickTurn, keyboardTurn }));
    if (!pointerTilt || !clickTurn || !keyboardTurn || midSpin === 'none') throw new Error('Desktop interaction failed');
    await interactivePage.close();

    const touchPage = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
    await touchPage.goto(baseURL, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await touchPage.waitForTimeout(1200);
    await touchPage.getByRole('button', { name: 'Girar el símbolo tridimensional de ESCALA' }).tap();
    const touchTurn = await touchPage.locator('.hero-mark-world').evaluate(element => element.style.transform.includes('360deg'));
    console.log(JSON.stringify({ label: 'interaction-mobile', touchTurn }));
    if (!touchTurn) throw new Error('Mobile tap did not rotate the mark');
    await touchPage.close();
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
