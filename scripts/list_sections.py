import json
import re
import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

sections = json.load(open('scripts/live_main_sections.json', encoding='utf-8'))

for idx, s in enumerate(sections):
    soup = BeautifulSoup(s['html'], 'html.parser')
    h = soup.find(['h1', 'h2', 'h3'])
    h_txt = h.get_text(strip=True) if h else "(no heading)"
    print(f"[{idx}] {h_txt} (HTML length: {len(s['html'])})")
