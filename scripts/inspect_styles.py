from bs4 import BeautifulSoup

soup = BeautifulSoup(open('scripts/real_live_page.html', encoding='utf-8').read(), 'html.parser')
styles = soup.find_all('style')

print(f"Found {len(styles)} style tags.")
for idx, s in enumerate(styles):
    text = s.get_text()
    print(f"Style {idx}: length {len(text)} chars | snippet: {text[:120].strip()}")
