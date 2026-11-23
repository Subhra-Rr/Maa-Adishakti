import urllib.request
import json
import urllib.parse
import re

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ShaktaEncyclopediaBot/1.0 (contact: academic research)'
}

queries = [
    ("kali", "Goddess Kali painting"),
    ("tara", "Tara Mahavidya painting"),
    ("tripura_sundari", "Tripurasundari painting"),
    ("bhuvaneshvari", "Bhuvaneshwari painting"),
    ("chhinnamasta", "Chhinnamasta painting"),
    ("bhairavi", "Bhairavi Mahavidya painting"),
    ("dhumavati", "Dhumavati painting"),
    ("bagalamukhi", "Bagalamukhi painting"),
    ("matangi", "Matangi painting"),
    ("kamalatmika", "Gaja Lakshmi painting"),
    ("saraswati", "Raja Ravi Varma Saraswati"),
    ("lakshmi", "Raja Ravi Varma Lakshmi"),
    ("pratyangira", "Pratyangira"),
    ("sri_yantra", "Sri Yantra"),
    ("kali_yantra", "Kali Yantra"),
    ("vimala_puri", "Bimala temple Puri"),
    ("tara_tarini", "Tara Tarini temple"),
    ("biraja_jajpur", "Biraja temple Jajpur"),
    ("samaleswari", "Samaleswari temple Sambalpur"),
    ("hirapur", "Chausath Yogini Temple Hirapur")
]

for key, q in queries:
    url = f"https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrsearch={urllib.parse.quote(q)}&gsrlimit=3&prop=imageinfo&iiprop=url|mime"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            print(f"=== {key} ({q}) ===")
            for k, v in pages.items():
                title = v.get('title', '')
                info = v.get('imageinfo', [{}])[0]
                img_url = info.get('url', '')
                print(f"  {title} -> {img_url[:80]}...")
    except Exception as e:
        print(f"Error {key}: {e}")
