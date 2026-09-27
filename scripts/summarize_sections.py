import json
import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

sections = json.load(open('scripts/live_main_sections.json', encoding='utf-8'))

for s in sections:
    soup = BeautifulSoup(s['html'], 'html.parser')
    h = [f"<{el.name}>{el.get_text(strip=True)}</{el.name}>" for el in soup.find_all(['h1', 'h2', 'h3', 'h4'])]
    links = [f"[{a.get_text(strip=True)}]({a.get('href')})" for a in soup.find_all('a') if a.get_text(strip=True)]
    buttons = [b.get_text(strip=True) for b in soup.find_all('button') if b.get_text(strip=True)]
    imgs = [img.get('src') for img in soup.find_all('img') if img.get('src')]
    text = soup.get_text(" ", strip=True)
    
    print(f"==================================================")
    print(f"SECTION {s['index']} | <{s['tag']}>")
    print(f"Headings: {h}")
    print(f"Images count: {len(imgs)}")
    if imgs:
        print(f"Image samples: {imgs[:3]}")
    print(f"Links count: {len(links)}: {links[:5]}")
    print(f"Buttons: {buttons[:5]}")
    print(f"Text preview: {text[:200]}...")
