from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

soup = BeautifulSoup(open('scripts/real_live_page.html', encoding='utf-8').read(), 'html.parser')
body = soup.find('body')

child6 = list(body.children)[6]
print("=== CHILD 6 (div extreme-zoom:hidden md:hidden) ===")
print(child6.get_text(" ", strip=True))

footer = soup.find('footer')
print("\n=== FOOTER ===")
print("Footer text snippet:", footer.get_text(" ", strip=True)[:400])

nav = soup.find('nav')
print("\n=== NAV ===")
print("Nav text snippet:", nav.get_text(" ", strip=True))
