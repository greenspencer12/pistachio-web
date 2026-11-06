// Compares two capture_fidelity output dirs. Usage: node scripts/compare_fidelity.js <liveDir> <localDir>
const fs = require('fs'), path = require('path');
const [a, b] = process.argv.slice(2);
const sigs = fs.readdirSync(a).filter(f => f.endsWith('.json'));
let clean = 0, diffs = [];
for (const f of sigs) {
  if (!fs.existsSync(path.join(b, f))) { diffs.push([f, 'missing locally']); continue; }
  const L = JSON.parse(fs.readFileSync(path.join(a, f))), R = JSON.parse(fs.readFileSync(path.join(b, f)));
  const issues = [];
  if (L.title !== R.title) issues.push('title');
  if (L.height !== R.height) issues.push(`height ${L.height}/${R.height}`);
  const key = i => i.t + '||' + i.f, lk = L.items.map(key), rk = R.items.map(key);
  const lset = new Set(lk), rset = new Set(rk);
  const onlyL = lk.filter(k => !rset.has(k)), onlyR = rk.filter(k => !lset.has(k));
  if (onlyL.length || onlyR.length) issues.push(`text/style ${onlyL.length}/${onlyR.length} e.g. ${JSON.stringify((onlyL[0] || onlyR[0]).slice(0, 90))}`);
  const broken = R.imgs.filter(i => i.broken).length; if (broken) issues.push(`${broken} broken imgs`);
  if (L.imgs.length !== R.imgs.length) issues.push(`imgs ${L.imgs.length}/${R.imgs.length}`);
  if (JSON.stringify(L.links).replace(/"href":"(https:\/\/pistachiocafe.com)?\/menu[^"]*"/g,'"href":"M"').split('https://pistachiocafe.com').join('').split('"href":""').join('"href":"/"') !== JSON.stringify(R.links).replace(/"href":"\/menu[^"]*"/g,'"href":"M"')) issues.push('links');
  issues.length ? diffs.push([f, issues.join('; ')]) : clean++;
}
console.log(`identical: ${clean}/${sigs.length}`);
for (const [f, i] of diffs) console.log(f.replace('.json', ''), '-', i);
