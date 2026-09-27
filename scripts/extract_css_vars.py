from bs4 import BeautifulSoup
import re
import json

soup = BeautifulSoup(open('scripts/real_live_page.html', encoding='utf-8').read(), 'html.parser')

styles = soup.find_all('style')
all_css = '\n'.join([s.get_text() for s in styles])

css_vars = re.findall(r'(--[\w-]+)\s*:\s*([^;]+);', all_css)
var_dict = dict(css_vars)

print(f"Found {len(var_dict)} CSS variables:")
for k, v in list(var_dict.items())[:35]:
    print(f"  {k}: {v}")

with open('scripts/live_css_vars.json', 'w', encoding='utf-8') as f:
    json.dump(var_dict, f, indent=2)
