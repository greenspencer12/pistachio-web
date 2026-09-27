import json
import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

# 1. Parse live page
soup_live = BeautifulSoup(open('scripts/real_live_page.html', encoding='utf-8').read(), 'html.parser')
main_live = soup_live.find('main')

# 2. Fetch rendered local page from localhost:3000
import urllib.request
local_html = urllib.request.urlopen('http://localhost:3000').read().decode('utf-8')
soup_local = BeautifulSoup(local_html, 'html.parser')

print("=== DEEP COMPARISON: LIVE vs LOCAL ===")

# Headings
h_live = [h.get_text(strip=True) for h in soup_live.find_all(['h1', 'h2']) if h.get_text(strip=True) != 'Image gallery' and not 'mobile app' in h.get_text().lower()]
h_local = [h.get_text(strip=True) for h in soup_local.find_all(['h1', 'h2']) if h.get_text(strip=True) != 'Image gallery']

print(f"\nLive visible H1/H2 count: {len(h_live)}")
print(f"Local visible H1/H2 count: {len(h_local)}")
for idx in range(max(len(h_live), len(h_local))):
    l_txt = h_live[idx] if idx < len(h_live) else "--- MISSING ---"
    loc_txt = h_local[idx] if idx < len(h_local) else "--- MISSING ---"
    match = "✓" if l_txt == loc_txt else "✗ DIFF"
    print(f"  {idx+1:2d}. {match} | LIVE: '{l_txt}' | LOCAL: '{loc_txt}'")

# Images
imgs_live = set(img.get('src').split('?')[0].split('/')[-1] for img in soup_live.find_all('img') if img.get('src') and 'pluto-images' in img.get('src'))
imgs_local = set(img.get('src').split('?')[0].split('/')[-1] for img in soup_local.find_all('img') if img.get('src') and 'pluto-images' in img.get('src'))

print(f"\nAuthentic Pluto images in Live: {len(imgs_live)}")
print(f"Authentic Pluto images in Local: {len(imgs_local)}")
diff_imgs = imgs_live - imgs_local
if diff_imgs:
    print(f"Images in live but not in local: {diff_imgs}")
else:
    print("✓ 100% of authentic Pluto images match!")

# Buttons / CTAs
btn_live = sorted(list(set(b.get_text(strip=True) for b in soup_live.find_all(['button', 'a']) if b.get_text(strip=True) in ['Order online', 'View menu', 'Explore Our Menu', 'Let’s Brunch', 'Order Now', 'Inquire Now', 'Join Piitachio Cafe Rewards', 'Sign in'])))
btn_local = sorted(list(set(b.get_text(strip=True) for b in soup_local.find_all(['button', 'a']) if b.get_text(strip=True) in ['Order online', 'View menu', 'Explore Our Menu', 'Let’s Brunch', 'Order Now', 'Inquire Now', 'Join Piitachio Cafe Rewards', 'Sign in'])))

print(f"\nKey CTAs in Live: {btn_live}")
print(f"Key CTAs in Local: {btn_local}")
if btn_live == btn_local:
    print("✓ 100% of Key CTAs match verbatim!")
else:
    print(f"Difference in CTAs: {set(btn_live) ^ set(btn_local)}")
