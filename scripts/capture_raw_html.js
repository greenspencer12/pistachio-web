// Saves the raw server HTML (before any client JS runs) for every live route.
// Usage: node scripts/capture_raw_html.js <outDir>
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { ROUTES, slug } = require('./routes');

(async () => {
  const outDir = process.argv[2];
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', headless: true,
  });
  const ctx = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  });
  const page = await ctx.newPage();
  for (const r of ROUTES) {
    const res = await page.goto('https://pistachiocafe.com' + r, { waitUntil: 'domcontentloaded', timeout: 45000 });
    const html = await res.text();
    fs.writeFileSync(path.join(outDir, slug(r) + '.html'), html);
    console.log(r, res.status(), html.length);
  }
  await browser.close();
})();
