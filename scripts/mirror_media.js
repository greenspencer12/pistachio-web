// Mirrors the media the captured pages use so nothing depends on Owner.com:
//  - original images behind /pluto-images/<path> (Owner's resizing proxy over
//    https://static-content.owner.com/<path>) -> media/originals/<path>
//    (served resized by app/pluto-images/[...path]/route.ts)
//  - /pluto-videos/* (hero video + poster)   -> public/pluto-videos/*
//  - /static-maps/map.jpg?lat=..&lon=..       -> public/static-maps/map_<lat>_<lon>.jpg
// Usage: node scripts/mirror_media.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ROOT = path.dirname(__dirname);
const LIVE_DIR = path.join(ROOT, 'content', 'live');
const ORIGINALS = path.join(ROOT, 'media', 'originals');

function collect() {
  const images = new Set(); const videos = new Set(); const maps = new Set();
  for (const f of fs.readdirSync(LIVE_DIR)) {
    const html = fs.readFileSync(path.join(LIVE_DIR, f), 'utf-8').replace(/&amp;/g, '&');
    for (const m of html.matchAll(/\/pluto-images\/([^"'\s,)?\\]+)/g)) images.add(m[1]);
    for (const m of html.matchAll(/https:\/\/static-content\.owner\.com\/((?!document\/)[^"'\s,)?\\&]+)/g)) images.add(m[1]);
    for (const m of html.matchAll(/\/pluto-videos\/([^"'\s,)?\\]+)/g)) videos.add(m[1]);
    for (const m of html.matchAll(/\/static-maps\/map\.jpg\?([^"'\s)\\]+)/g)) maps.add(m[1]);
  }
  return { images, videos, maps };
}

async function download(url, dest, tries = 4) {
  for (let i = 1; ; i++) {
    try {
      // Some CDN responses stall indefinitely; time out and retry rather than hang.
      const res = await fetch(url, { signal: AbortSignal.timeout(60000) });
      if (!res.ok) throw new Error(`${res.status} ${url}`);
      const buf = Buffer.from(await res.arrayBuffer());
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest + '.part', buf);
      fs.renameSync(dest + '.part', dest);
      return;
    } catch (e) {
      if (i >= tries) throw new Error(`${e.message} ${url}`);
    }
  }
}

(async () => {
  const { images, videos, maps } = collect();
  console.log(`${images.size} originals, ${videos.size} video files, ${maps.size} maps`);

  let ok = 0; const failed = [];
  const list = [...images];
  for (let i = 0; i < list.length; i += 12) {
    await Promise.all(list.slice(i, i + 12).map(async (p) => {
      const dest = path.join(ORIGINALS, p);
      if (fs.existsSync(dest)) { ok++; return; }
      try { await download(`https://static-content.owner.com/${p}`, dest); ok++; } catch (e) { failed.push(e.message); }
    }));
  }
  console.log(`originals: ${ok} ok, ${failed.length} failed`); failed.slice(0, 20).forEach((f) => console.log('  FAIL', f));

  // Videos and maps are only served by the Cloudflare-protected origin, so fetch in a real tab.
  const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  const page = await (await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  })).newPage();
  await page.goto('https://pistachiocafe.com/', { waitUntil: 'domcontentloaded' });
  const grab = async (url, dest) => {
    const r = await page.evaluate(async (u) => {
      const res = await fetch(u); const buf = new Uint8Array(await res.arrayBuffer()); let bin = '';
      for (let i = 0; i < buf.length; i += 0x8000) bin += String.fromCharCode(...buf.subarray(i, i + 0x8000));
      return { status: res.status, b64: btoa(bin) };
    }, url);
    if (r.status !== 200) { console.log('  FAIL', r.status, url); return; }
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, Buffer.from(r.b64, 'base64'));
    console.log('  ok', url);
  };
  for (const v of videos) await grab(`/pluto-videos/${v}`, path.join(ROOT, 'public', 'pluto-videos', v));
  for (const q of maps) {
    const p = new URLSearchParams(q);
    await grab(`/static-maps/map.jpg?${q}`, path.join(ROOT, 'public', 'static-maps', `map_${p.get('lat')}_${p.get('lon')}.jpg`));
  }
  await browser.close();
})();
