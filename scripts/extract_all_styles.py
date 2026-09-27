from bs4 import BeautifulSoup

soup = BeautifulSoup(open('scripts/real_live_page.html', encoding='utf-8').read(), 'html.parser')
styles = soup.find_all('style')

with open('public/mercury.css', 'w', encoding='utf-8') as f:
    for idx in range(len(styles)):
        f.write(f"/* === STYLE TAG {idx} === */\n")
        f.write(styles[idx].get_text())
        f.write("\n\n")

print(f"Written all {len(styles)} style blocks to public/mercury.css")
