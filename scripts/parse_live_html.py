from bs4 import BeautifulSoup
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

html = open('scripts/real_live_page.html', encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')

print('=== HEADER & NAV ===')
header = soup.find('header')
if header:
    links = header.find_all('a')
    for l in links:
        print('  NAV LINK:', l.get_text(strip=True), '->', l.get('href'))

print('\n=== MAIN SECTIONS ===')
main = soup.find('main')
if main:
    sections = main.find_all(['section', 'div'], recursive=False)
    print(f'Total direct children of main: {len(sections)}')

# Find all headings in document order
print('\n=== ALL HEADINGS WITH TEXT ===')
headings = soup.find_all(['h1', 'h2', 'h3', 'h4'])
for idx, h in enumerate(headings):
    parent_sec = h.find_parent(['section', 'header', 'footer', 'article'])
    parent_tag = parent_sec.name if parent_sec else 'none'
    print(f'{idx+1}. [{h.name}] (in <{parent_tag}>) "{h.get_text(strip=True)}"')

print('\n=== FOOTER ===')
footer = soup.find('footer')
if footer:
    footer_links = footer.find_all('a')
    print(f'Footer text preview:\n{footer.get_text(strip=True)[:400]}')
    print(f'Total footer links: {len(footer_links)}')
    for fl in footer_links[:15]:
        print('  FOOTER LINK:', fl.get_text(strip=True), '->', fl.get('href'))
