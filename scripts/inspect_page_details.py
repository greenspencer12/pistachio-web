import json
import re

with open(r'C:\Users\ather\.gemini\Google Ads Clients\Pistachio_Cafe_Google_Ads_Assets\pistachio_complete_site_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for url in [
    'https://pistachiocafe.com/page/breakfast',
    'https://pistachiocafe.com/page/brunch',
    'https://pistachiocafe.com/page/halal-at-pistachio',
    'https://pistachiocafe.com/story',
    'https://pistachiocafe.com/page/proudly-serving-new-haven',
    'https://pistachiocafe.com/events',
    'https://pistachiocafe.com/careers',
    'https://pistachiocafe.com/page/press',
    'https://pistachiocafe.com/page/contact-us--locations',
    'https://pistachiocafe.com/locations'
]:
    page = data.get(url, {})
    print('='*50)
    print(f'URL: {url}')
    print(f'Title: {page.get("title")}')
    print(f'Description: {page.get("description")}')
    html = page.get('html', '')
    
    # Extract sections with headings and images
    # find all img tags with alt
    imgs = re.findall(r'<img[^>]+alt=["\']([^"\']*)["\'][^>]+src=["\']([^"\']+)["\']', html)
    if not imgs:
        imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\'][^>]+alt=["\']([^"\']*)["\']', html)
        imgs = [(alt, src) for src, alt in imgs]
    print(f'Found {len(imgs)} img tags')
    for alt, src in imgs[:6]:
        if '5e40041a' not in src:
            print(f'  [IMG] Alt: "{alt}" -> {src}')
