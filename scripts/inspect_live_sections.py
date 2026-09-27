from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

html = open('scripts/real_live_page.html', encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')

main = soup.find('main')
if not main:
    print('No main found')
    sys.exit(0)

sections = main.find_all(['section', 'div'], recursive=False)
for idx, sec in enumerate(sections):
    h = sec.find(['h1', 'h2', 'h3'])
    h_text = h.get_text(strip=True) if h else 'No heading'
    imgs = [img.get('src') for img in sec.find_all('img') if img.get('src')]
    buttons = [b.get_text(strip=True) for b in sec.find_all(['button', 'a']) if b.get_text(strip=True)]
    print(f'\n--- SECTION {idx+1}: [{h_text}] ---')
    print(f'Text snippet: {sec.get_text(" ", strip=True)[:250]}')
    print(f'Images ({len(imgs)}): {imgs[:3]}')
    print(f'Buttons/Links: {buttons[:5]}')
