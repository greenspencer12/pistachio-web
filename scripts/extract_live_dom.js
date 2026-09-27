const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function main() {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
  });

  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  console.log('Navigating to https://pistachiocafe.com/ ...');
  await page.goto('https://pistachiocafe.com/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(5000);

  // Extract page styles, fonts, links, and sections
  const siteDetails = await page.evaluate(() => {
    // Fonts
    const fonts = Array.from(document.querySelectorAll('link[rel*="font"], link[href*="fonts"]')).map(l => l.href);
    
    // Headings and paragraphs in order
    const elements = Array.from(document.querySelectorAll('header, main section, footer')).map(sec => {
      return {
        tag: sec.tagName,
        className: sec.className,
        text: sec.innerText,
        html: sec.outerHTML,
      };
    });

    // Extract all button labels and links
    const buttons = Array.from(document.querySelectorAll('button, a')).map(el => ({
      tag: el.tagName,
      text: el.innerText.trim(),
      href: el.getAttribute('href'),
      bgColor: window.getComputedStyle(el).backgroundColor,
      color: window.getComputedStyle(el).color,
      borderRadius: window.getComputedStyle(el).borderRadius,
    })).filter(b => b.text.length > 0 && b.text.length < 50);

    return {
      title: document.title,
      fonts,
      elementsCount: elements.length,
      buttons,
      sections: elements.map(e => ({ tag: e.tag, text: e.text.slice(0, 300) })),
    };
  });

  // Also get full HTML of main
  const fullHtml = await page.content();
  fs.writeFileSync(path.join(__dirname, 'live_full_page.html'), fullHtml, 'utf-8');
  fs.writeFileSync(path.join(__dirname, 'live_site_details.json'), JSON.stringify(siteDetails, null, 2), 'utf-8');

  console.log('Successfully captured live site DOM and details!');
  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
