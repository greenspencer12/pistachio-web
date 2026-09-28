// Element-level geometry diff between live and local for one route/viewport.
// Reports the first elements (in document order) whose box or key styles differ.
// Usage: node scripts/geometry_diff.js <route> [width=1440] [maxRows=25]
const { chromium } = require('playwright');

const [route, width = '1440', maxRows = '25'] = process.argv.slice(2);

async function boxes(page, origin) {
  await page.goto(origin + route, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(3000);
  for (let y = 0; y < 30000; y += 700) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(60);
    if (y > (await page.evaluate(() => document.body.scrollHeight))) break;
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1500);
  return page.evaluate(() => {
    const path = (e) => {
      const parts = [];
      for (; e && e !== document.body; e = e.parentElement) {
        // Skip the local display:contents page wrapper so paths line up with live.
        if (e.parentElement === document.body && e.style.display === 'contents') break;
        const sib = [...e.parentElement.children].filter((c) => c.tagName === e.tagName);
        parts.unshift(e.tagName.toLowerCase() + (sib.length > 1 ? `[${sib.indexOf(e)}]` : ''));
      }
      return parts.join('>');
    };
    const out = [];
    for (const e of document.body.querySelectorAll('*')) {
      if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE'].includes(e.tagName)) continue;
      const r = e.getBoundingClientRect();
      if (!r.width && !r.height) continue;
      const s = getComputedStyle(e);
      out.push({
        p: path(e), cls: (e.className && e.className.baseVal === undefined ? e.className : '').slice(0, 60),
        b: [Math.round(r.left), Math.round(r.top + scrollY), Math.round(r.width), Math.round(r.height)].join(','),
        s: [s.fontFamily.split(',')[0], s.fontSize, s.fontWeight, s.color, s.backgroundColor, s.padding, s.margin].join('|'),
        t: (e.children.length ? '' : e.textContent.trim().slice(0, 40)),
      });
    }
    return out;
  });
}

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', headless: true,
  });
  const ctx = await browser.newContext({
    viewport: { width: +width, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  });
  const [live, local] = await Promise.all([
    ctx.newPage().then((p) => boxes(p, 'https://pistachiocafe.com')),
    ctx.newPage().then((p) => boxes(p, 'http://localhost:3000')),
  ]);
  const byPath = new Map(local.map((x) => [x.p, x]));
  let rows = 0;
  console.log(`live ${live.length} elements, local ${local.length}`);
  for (const a of live) {
    const b = byPath.get(a.p);
    if (!b) { console.log('ONLY LIVE ', a.p.slice(-90), a.cls, a.b, a.t); }
    else if (a.b !== b.b || a.s !== b.s) {
      console.log('DIFF', a.p.slice(-90), `"${a.t}"`, '\n   live ', a.b, a.s, '\n   local', b.b, b.s);
    } else continue;
    if (++rows >= +maxRows) break;
  }
  await browser.close();
})();
