import json
import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

soup = BeautifulSoup(open('scripts/real_live_page.html', encoding='utf-8').read(), 'html.parser')

# Dump all sections inside main
main = soup.find('main')
children = [c for c in main.children if c.name and c.name != 'script']

results = []
for idx, c in enumerate(children):
    results.append({
        "index": idx,
        "tag": c.name,
        "classes": c.get('class', []),
        "html": str(c)
    })

with open('scripts/live_main_sections.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print(f"Dumped {len(results)} sections from <main> to scripts/live_main_sections.json")

# Also dump header and footer
header = soup.find('header')
footer = soup.find('footer')
with open('scripts/live_header_footer.json', 'w', encoding='utf-8') as f:
    json.dump({
        "header_html": str(header) if header else None,
        "footer_html": str(footer) if footer else None
    }, f, indent=2, ensure_ascii=False)
print("Dumped header and footer to scripts/live_header_footer.json")
