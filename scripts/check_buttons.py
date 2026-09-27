from bs4 import BeautifulSoup

soup = BeautifulSoup(open('scripts/real_live_page.html', encoding='utf-8').read(), 'html.parser')
buttons = soup.find_all(['button', 'a'])

print("Sample buttons and their classes:")
seen = set()
for b in buttons:
    text = b.get_text(strip=True)
    cls = ' '.join(b.get('class', []))
    if text and text not in seen:
        seen.add(text)
        print(f"[{text}]: <{b.name} class='{cls}' href='{b.get('href')}'>")
