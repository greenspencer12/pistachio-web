from bs4 import BeautifulSoup

html = open('scripts/real_live_page.html', encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')

print('=== HEADER CLASSES & STYLES ===')
header = soup.find('header')
if header:
    print('Header classes:', header.get('class'))
    print('Header styles:', header.get('style'))

print('\n=== BUTTON CLASSES & STYLES ===')
buttons = soup.find_all(['button', 'a'])
seen_classes = set()
for b in buttons:
    cls = ' '.join(b.get('class', []))
    if cls and cls not in seen_classes:
        seen_classes.add(cls)
        print(f'Button [{b.get_text(strip=True)[:20]}]: class="{cls}"')
        if len(seen_classes) > 10:
            break
