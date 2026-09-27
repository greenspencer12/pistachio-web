const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function main() {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
  });

  const page = await context.newPage();

  console.log('Navigating to https://pistachiocafe.com/ ...');
  await page.goto('https://pistachiocafe.com/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(6000);

  const title = await page.title();
  console.log('Title on live site:', title);

  const html = await page.content();
  fs.writeFileSync(path.join(__dirname, 'real_live_page.html'), html, 'utf-8');
  console.log('Saved real_live_page.html (length:', html.length, ')');

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
