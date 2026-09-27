const { chromium } = require('playwright');
const path = require('path');

async function measurePage(url) {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);

  const sections = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2')).filter(h => h.innerText.trim() !== 'Image gallery' && !h.innerText.includes('mobile app'));
    return headings.map(h => {
      let container = h.closest('section') || h.closest('header') || h.parentElement.parentElement;
      const rect = container ? container.getBoundingClientRect() : h.getBoundingClientRect();
      return {
        heading: h.innerText.trim(),
        tag: h.tagName,
        top: Math.round(rect.top + window.scrollY),
        height: Math.round(rect.height),
      };
    });
  });

  await browser.close();
  return sections;
}

async function main() {
  console.log('Measuring local sections...');
  const localSections = await measurePage('http://localhost:3000/');
  
  const liveHtmlPath = 'file:///' + path.resolve(__dirname, 'real_live_page.html').replace(/\\/g, '/');
  console.log('Measuring real live page HTML sections from:', liveHtmlPath);
  const liveSections = await measurePage(liveHtmlPath);

  console.log('\n=== REAL LIVE vs LOCAL SECTION HEIGHT COMPARISON ===');
  for (let i = 0; i < Math.max(localSections.length, liveSections.length); i++) {
    const loc = localSections[i] || {};
    const live = liveSections[i] || {};
    console.log(`${(i+1).toString().padStart(2)}. [${live.heading || loc.heading}]`);
    console.log(`    REAL LIVE: top=${live.top}, height=${live.height}`);
    console.log(`    LOCAL:     top=${loc.top}, height=${loc.height}`);
  }
}

main().catch(console.error);
