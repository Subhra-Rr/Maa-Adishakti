import urllib.request
import json
import time

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ShaktaTattva/1.0'}

def search(q):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch={urllib.parse.quote(q)}&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url|mime&format=json"
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as r:
        data = json.loads(r.read().decode('utf-8'))
        pages = data.get('query', {}).get('pages', {})
        res = []
        for pid, pdata in pages.items():
            if 'imageinfo' in pdata and len(pdata['imageinfo']) > 0:
                res.append((pdata.get('title'), pdata['imageinfo'][0].get('url')))
        return res

yantra_queries = [
    "Kali Yantra",
    "Tara Yantra",
    "Bhuvaneshwari Yantra",
    "Chhinnamasta Yantra",
    "Bhairavi Yantra",
    "Bagalamukhi Yantra",
    "Matangi Yantra",
    "Kamala Yantra",
    "Dhumavati Yantra",
    "Tripura Sundari Yantra",
    "Sri Yantra 2.svg",
    "Sri Chakra"
]

print("Yantra searches:")
for yq in yantra_queries:
    time.sleep(1.2)
    items = search(yq)
    print(f"\n--- {yq} ({len(items)} found) ---")
    for t, u in items[:3]:
        print(f"  {t} -> {u}")
