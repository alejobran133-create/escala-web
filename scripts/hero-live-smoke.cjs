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
          return front.height > 30 && front.top < ticker.top - 25;
        })(),
      }));
      await page.screenshot({ path: path.join(output, `${label}.png`), animations: 'disabled' });
      console.log(JSON.stringify({ label, status: response.status(), ...state }));
      if (response.status() !== 200 || !state.markLoaded || state.overflow || !state.podiumVisible) {
        throw new Error(`${label}: hero smoke check failed`);
      }
      await page.close();
    }
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
