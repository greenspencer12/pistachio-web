import json
import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

soup = BeautifulSoup(open('scripts/real_live_page.html', encoding='utf-8').read(), 'html.parser')
live_headings = []
for h in soup.find_all(['h1', 'h2', 'h3', 'h4']):
    txt = h.get_text(strip=True)
    if txt:
        live_headings.append({'tag': h.name.upper(), 'text': txt})

local = json.load(open('scripts/local_verified_dom.json', encoding='utf-8'))
local_headings = local['headings']

print(f"=== LIVE HEADINGS ({len(live_headings)}) ===")
for i, h in enumerate(live_headings):
    print(f"{i+1:2d}. [{h['tag']}] {h['text']}")

print(f"\n=== LOCAL HEADINGS ({len(local_headings)}) ===")
for i, h in enumerate(local_headings):
    print(f"{i+1:2d}. [{h['tag']}] {h['text']}")
