import urllib.request
import json
import time

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ShaktaEncyclopediaBot/1.0 (academic research; contact@shaktatattva.org)'}

def search_files(term):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch={urllib.parse.quote(term)}&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|mime&format=json"
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as r:
        data = json.loads(r.read().decode('utf-8'))
        pages = data.get('query', {}).get('pages', {})
        results = []
        for pid, pdata in pages.items():
            if 'imageinfo' in pdata and len(pdata['imageinfo']) > 0:
                results.append((pdata.get('title'), pdata['imageinfo'][0].get('url')))
        return results

terms = [
    "Chandraghanta",
    "Kushmanda",
    "Skandamata",
    "Katyayani Devi",
    "Kalaratri Devi",
    "Mahagauri Devi",
    "Siddhidatri Devi",
    "Shailaputri Parvati",
    "Raja Ravi Varma Devi",
    "Raja Ravi Varma Durga",
    "Goddess Durga painting"
]

for t in terms:
    time.sleep(2.0)
    try:
        res = search_files(t)
        print(f"\n{t}:")
        for title, url in res[:3]:
            print(f"  {title}")
    except Exception as e:
        print(f"{t}: Error {e}")
