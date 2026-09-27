import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

cmp = json.load(open('scripts/comparison.json', encoding='utf-8'))
local = cmp['local']
live = cmp['live']

print('=== LOCAL HEADINGS ===')
for idx, h in enumerate(local.get('headings', [])):
    print(f'{idx+1}. [{h["tag"]}] "{h["text"]}"')

print('\n=== LIVE HEADINGS ===')
for idx, h in enumerate(live.get('headings', [])):
    print(f'{idx+1}. [{h["tag"]}] "{h["text"]}"')
