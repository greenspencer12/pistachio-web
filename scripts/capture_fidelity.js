// Captures rendered HTML, full CSS and a visible-text/style signature for every
// route on a given origin, so live and local can be diffed page by page.
// Usage: node scripts/capture_fidelity.js <origin> <outDir>
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ROUTES = [
  '/', '/locations', '/menu', '/1245-chapel-st', '/911-whalley-ave', '/menu/1245-chapel-st',
  '/catering', '/page/breakfast', '/page/brunch', '/page/birthdays--space-rentals', '/story',
  '/page/proudly-serving-new-haven', '/events', '/careers', '/page/press',
  '/page/contact-us--locations', '/terms', '/privacy', '/accessibility', '/page/halal-at-pistachio',
];

const [origin, outDir] = process.argv.slice(2);
const only = process.argv[4] ? process.argv[4].split(',') : null;

function slug(r) { return r === '/' ? 'home' : r.slice(1).replace(/\//g, '__'); }

async function signature(page) {
  return page.evaluate(() => {
    const vis = (e) => {
      const s = getComputedStyle(e);
      return s.display !== 'none' && s.visibility !== 'hidden' && e.getClientRects().length > 0;
    };
    const items = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) {
      const t = n.textContent.replace(/\s+/g, ' ').trim();
      const el = n.parentElement;
      if (!t || !el || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(el.tagName) || !vis(el)) continue;
      const s = getComputedStyle(el);
      items.push({
        t, tag: el.tagName,
        f: `${s.fontFamily.split(',')[0].replace(/"/g, '')}|${s.fontSize}|${s.fontWeight}|${s.lineHeight}|${s.color}|${s.textTransform}`,
      });
    }
    const imgs = [...document.querySelectorAll('img')].filter(vis).map((i) => ({
      src: (i.currentSrc || i.src).replace(/^https?:\/\/[^/]+/, '').split('?')[0], alt: i.alt,
      w: Math.round(i.getBoundingClientRect().width), h: Math.round(i.getBoundingClientRect().height),
      broken: i.complete && i.naturalWidth === 0,
    }));
    const links = [...document.querySelectorAll('a')].filter(vis).map((a) => ({
      t: a.innerText.replace(/\s+/g, ' ').trim(), href: a.getAttribute('href'),
    }));
    const blocks = [...document.querySelectorAll('header, main > *, footer, nav')].filter(vis).map((e) => {
      const r = e.getBoundingClientRect(); const s = getComputedStyle(e);
      return { tag: e.tagName, y: Math.round(r.top + scrollY), h: Math.round(r.height), bg: s.backgroundColor };
    });
    return { title: document.title, height: document.body.scrollHeight, items, imgs, links, blocks };
  });
}

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', headless: true,
  });
  for (const vp of [{ name: 'desktop', width: 1440, height: 900 }, { name: 'mobile', width: 390, height: 844 }]) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
    });
    const page = await ctx.newPage();
    for (const r of ROUTES) {
      if (only && !only.includes(r)) continue;
      try {
        await page.goto(origin + r, { waitUntil: 'domcontentloaded', timeout: 45000 });
        await page.waitForTimeout(3000);
        for (let y = 0; y < 30000; y += 700) {
          await page.evaluate((yy) => window.scrollTo(0, yy), y);
          await page.waitForTimeout(80);
          if (y > (await page.evaluate(() => document.body.scrollHeight))) break;
        }
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
        await page.waitForTimeout(1200);
        const base = path.join(outDir, `${vp.name}__${slug(r)}`);
        const sig = await signature(page);
        fs.writeFileSync(base + '.json', JSON.stringify(sig, null, 1));
        if (vp.name === 'desktop') {
          fs.writeFileSync(base + '.html', await page.content());
          const css = await page.evaluate(() => [...document.styleSheets].map((s) => {
            try { return `/* ${s.href || 'inline'} */\n` + [...s.cssRules].map((x) => x.cssText).join('\n'); } catch (e) { return ''; }
          }).join('\n'));
          fs.writeFileSync(base + '.css', css);
          await page.screenshot({ path: base + '.png', fullPage: true });
        }
        console.log(vp.name, r, 'ok', sig.height);
      } catch (e) {
        console.log(vp.name, r, 'FAIL', e.message.split('\n')[0]);
      }
    }
    await ctx.close();
  }
  await browser.close();
})();
