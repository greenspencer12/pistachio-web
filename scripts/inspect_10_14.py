import json
import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

sections = json.load(open('scripts/live_main_sections.json', encoding='utf-8'))

for idx in [10, 11, 12, 13, 14]:
    s = sections[idx]
    soup = BeautifulSoup(s['html'], 'html.parser')
    print(f"\n==================== SECTION {idx} ====================")
    if idx == 10: # Reviews
        cards = soup.find_all(attrs={"data-review-card": True}) or soup.find_all(class_=lambda c: c and 'review-card' in c)
        print(f"Review cards found: {len(cards)}")
        for c in cards:
            name = c.find(class_=lambda x: x and 'author' in x) or c.find('p', class_=lambda x: x and 'font-medium' in x)
            print(f"Reviewer: {c.get_text(' ', strip=True)[:150]}")
    elif idx == 11: # Featuring
        pills = soup.find_all('span')
        print("Featuring items:", [p.get_text(strip=True) for p in pills if p.get_text(strip=True)])
    elif idx == 12: # Rewards
        print("Rewards text:", soup.get_text(" ", strip=True))
    elif idx == 13: # FAQ
        print("FAQ text:", soup.get_text(" ", strip=True)[:400])
    elif idx == 14: # Locations
        tabs = soup.find_all(class_=lambda c: c and 'location-pill' in c)
        print("Location tabs:", [t.get_text(strip=True) for t in tabs])
        headings = soup.find_all(['h2', 'h3', 'h4'])
        print("Headings:", [f"{h.name}: {h.get_text(strip=True)}" for h in headings])
