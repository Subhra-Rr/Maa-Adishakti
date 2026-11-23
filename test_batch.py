import urllib.request
import json

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ShaktaEncyclopediaBot/1.0 (academic research; contact@shaktatattva.org)'}

def fetch_titles_batch(titles):
    titles_str = "|".join(titles)
    url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(titles_str)}&prop=imageinfo&iiprop=url|size|mime&format=json"
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as r:
        data = json.loads(r.read().decode('utf-8'))
        pages = data.get('query', {}).get('pages', {})
        results = {}
        for pid, pdata in pages.items():
            if pid != "-1" and 'imageinfo' in pdata and len(pdata['imageinfo']) > 0:
                t = pdata.get('title')
                u = pdata['imageinfo'][0].get('url')
                results[t] = u
        return results

test_titles = [
    "File:Kali Tara.jpg",
    "File:Chinnamasta.jpg",
    "File:Bhuvaneswari.jpg",
    "File:Tripurasundari.jpg",
    "File:Bagalamukhi.jpg",
    "File:Bhairavi.jpg",
    "File:Goddess Matangi.jpg",
    "File:Gaja Lakshmi.jpg",
    "File:Raja Ravi Varma - Saraswati.jpg",
    "File:Raja Ravi Varma - Lakshmi.jpg",
    "File:Sri Yantra 2.svg",
    "File:Shree Yantra.jpg",
    "File:Varahi.jpg",
    "File:Chamunda.jpg",
    "File:Maa Katyayani.jpg",
    "File:Kalaratri.jpg"
]

res = fetch_titles_batch(test_titles)
print(f"Batch returned {len(res)} / {len(test_titles)} items in 1 single HTTP request!")
for k, v in res.items():
    print(f"  {k} -> {v[:80]}...")
