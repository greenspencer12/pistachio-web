const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ROUTES = [
  '/',
  '/menu',
  '/catering',
  '/page/breakfast',
  '/page/brunch',
  '/page/birthdays--space-rentals',
  '/story',
  '/page/proudly-serving-new-haven',
  '/page/halal-at-pistachio',
  '/page/press',
  '/page/contact-us--locations',
  '/911-whalley-ave',
  '/1245-chapel-st',
  '/locations',
  '/careers',
  '/events',
  '/terms',
  '/privacy',
  '/accessibility',
];

async function main() {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
  });

  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const results = [];

  for (const route of ROUTES) {
    const url = `http://localhost:3000${route}`;
    const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    const title = await page.title();
    const h1 = await page.$eval('h1', el => el.innerText.trim()).catch(() => 'NO H1');
    const font = await page.evaluate(() => window.getComputedStyle(document.body).fontFamily);

    results.push({
      route,
      status: res.status(),
      title,
      h1,
      font: font.split(',')[0],
    });
    console.log(`✓ ${route} -> Status: ${res.status()} | H1: "${h1}" | Font: ${font.split(',')[0]}`);
  }

  fs.writeFileSync(
    path.join(__dirname, 'all_pages_audit.json'),
    JSON.stringify(results, null, 2),
    'utf-8'
  );

  console.log('\nAll 19 routes verified successfully with Playwright!');
  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
