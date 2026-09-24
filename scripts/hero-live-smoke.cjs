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
      page.setDefaultTimeout(120000);
      const response = await page.goto(baseURL, { waitUntil: 'domcontentloaded', timeout: 30000 });
      const environment = page.locator('.hero-environment-image');
      await environment.waitFor({ state: 'visible', timeout: 15000 });
      await environment.evaluate(image => Promise.race([
        image.decode(),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Image decode timeout')), 60000)),
      ]));
      const state = await page.evaluate(() => ({
        environmentLoaded: document.querySelector('.hero-environment-image')?.naturalWidth > 0,
        floatingSquareAbsent: !document.querySelector('.hero-stage,.hero-artifact,.hero-artifact-symbol'),
        overflow: document.documentElement.scrollWidth > innerWidth,
        motionDisabled: getComputedStyle(document.querySelector('.hero-environment')).animationName === 'none',
      }));
      await page.screenshot({ path: path.join(output, `${label}.png`), animations: 'disabled' });
      console.log(JSON.stringify({ label, status: response.status(), ...state }));
      if (response.status() !== 200 || !state.environmentLoaded || !state.floatingSquareAbsent || state.overflow || !state.motionDisabled) {
        throw new Error(`${label}: hero smoke check failed`);
      }
      await page.close();
    }

    const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'no-preference' });
    page.setDefaultTimeout(120000);
    await page.goto(baseURL, { waitUntil: 'domcontentloaded', timeout: 30000 });
    const environment = page.locator('.hero-environment');
    const firstFrame = await environment.evaluate(element => getComputedStyle(element).transform);
    await page.waitForTimeout(750);
    const environmentMoves = firstFrame !== await environment.evaluate(element => getComputedStyle(element).transform);
    const lightMoves = await page.locator('.hero-sweep').evaluate(element => getComputedStyle(element).animationName === 'hero-environment-sweep');
    await page.screenshot({ path: path.join(output, 'desktop-moving.png') });
    console.log(JSON.stringify({ label: 'motion-desktop', environmentMoves, lightMoves }));
    if (!environmentMoves || !lightMoves) throw new Error('Hero motion failed');
    await page.close();
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
