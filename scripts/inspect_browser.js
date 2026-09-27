const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function main() {
  console.log('Launching browser via Playwright...');
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
  });

  const page = await context.newPage();

  console.log('Navigating to http://localhost:3000/ ...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle', timeout: 15000 });

  // Take full page screenshot of local site
  const localScreenshotPath = path.join(__dirname, '..', 'localhost_full.png');
  await page.screenshot({ path: localScreenshotPath, fullPage: true });
  console.log('Saved localhost screenshot to:', localScreenshotPath);

  // Extract page title, headings, and font families
  const localData = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3')).map(h => ({
      tag: h.tagName,
      text: h.innerText.trim(),
      fontFamily: window.getComputedStyle(h).fontFamily,
      fontSize: window.getComputedStyle(h).fontSize,
      fontWeight: window.getComputedStyle(h).fontWeight,
      color: window.getComputedStyle(h).color,
    }));

    const navLinks = Array.from(document.querySelectorAll('nav a')).map(a => ({
      text: a.innerText.trim(),
      href: a.getAttribute('href'),
    }));

    return {
      title: document.title,
      headings,
      navLinks,
    };
  });

  fs.writeFileSync(
    path.join(__dirname, 'local_verified_dom.json'),
    JSON.stringify(localData, null, 2),
    'utf-8'
  );

  console.log('Verified DOM written to scripts/local_verified_dom.json');
  console.log('Title:', localData.title);
  console.log('Headings count:', localData.headings.length);
  for (const h of localData.headings) {
    console.log(`[${h.tag}] "${h.text}" | Font: ${h.fontFamily.split(',')[0]} (${h.fontSize}, weight: ${h.fontWeight})`);
  }

  await browser.close();
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
