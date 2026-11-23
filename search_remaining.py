import urllib.request
import json
import time

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ShaktaEncyclopediaBot/1.0 (academic research; contact@shaktatattva.org)'}

def search_query(q):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch={urllib.parse.quote(q)}&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url|mime&format=json"
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as r:
        data = json.loads(r.read().decode('utf-8'))
        pages = data.get('query', {}).get('pages', {})
        results = []
        for pid, pdata in pages.items():
            if 'imageinfo' in pdata and len(pdata['imageinfo']) > 0:
                results.append((pdata.get('title'), pdata['imageinfo'][0].get('url')))
        return results

queries = [
    "Dhumavati",
    "Shailaputri",
    "Chandraghanta",
    "Kushmanda",
    "Skandamata",
    "Mahagauri",
    "Siddhidatri",
    "Raja Ravi Varma Saraswati",
    "Raja Ravi Varma Lakshmi",
    "Pratyangira",
    "Brahmani sculpture",
    "Maheshwari Matrika",
    "Kaumari Matrika",
    "Vaishnavi Matrika",
    "Indrani Matrika",
    "Narasimhi Matrika",
    "Sri Yantra",
    "Mahavidya Yantra",
    "Vimala Temple Puri",
    "Biraja Temple Jajpur",
    "Tara Tarini",
    "Samaleswari Temple",
    "Hirapur 64 Yogini"
]

print("Searching titles...")
for q in queries:
    time.sleep(1.8)
    res = search_query(q)
    print(f"\nQuery: {q} ({len(res)} results)")
    for title, url in res[:3]:
        print(f"  {title}")
