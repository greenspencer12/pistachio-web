from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

soup = BeautifulSoup(open('scripts/real_live_page.html', encoding='utf-8').read(), 'html.parser')
nav = soup.find('nav')

print("=== NAV LINKS ===")
for a in nav.find_all('a'):
    print(f"Text: '{a.get_text(strip=True)}' | Href: {a.get('href')} | Class: {' '.join(a.get('class', []))}")

print("\n=== NAV BUTTONS ===")
for b in nav.find_all('button'):
    print(f"Text: '{b.get_text(strip=True)}' | Aria: {b.get('aria-label', '')} | Class: {' '.join(b.get('class', []))}")
