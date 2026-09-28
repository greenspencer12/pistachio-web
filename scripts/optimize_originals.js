// Caps mirrored originals at 2560px wide (the largest size Owner's image CDN ever
// served) and re-encodes them at high quality, so media/originals stays small
// enough for the repo. Files are rewritten in place, keeping their format.
// Usage: node scripts/optimize_originals.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const DIR = path.join(path.dirname(__dirname), 'media', 'originals');
const MAX = 2560;

function* walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) yield* walk(p); else yield p;
  }
}

(async () => {
  let before = 0; let after = 0;
  for (const f of walk(DIR)) {
    const input = fs.readFileSync(f);
    before += input.length;
    let meta;
    try { meta = await sharp(input).metadata(); } catch { after += input.length; continue; }
    // Already converted on an earlier run — never re-encode (lossy generations add up).
    if (meta.format === 'webp') { after += input.length; continue; }
    let img = sharp(input).rotate();
    if (meta.width > MAX) img = img.resize({ width: MAX });
    // The pluto-images route picks the output format per request, so the stored
    // original only needs to be a faithful source: high-quality WebP (keeps alpha).
    const out = meta.format === 'gif' || meta.format === 'svg' ? null
      : await img.webp({ quality: 92, alphaQuality: 100, effort: 5 }).toBuffer();
    if (out && out.length < input.length) { fs.writeFileSync(f, out); after += out.length; } else after += input.length;
  }
  console.log(`originals: ${(before / 1e6).toFixed(1)} MB -> ${(after / 1e6).toFixed(1)} MB`);
})();
