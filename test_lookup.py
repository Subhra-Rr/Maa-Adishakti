import urllib.request
import json
import time

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ShaktaEncyclopediaBot/1.0 (academic research; contact@shaktatattva.org)'
}

queries = {
    "kali": ["File:Raja_Ravi_Varma_-_Kali.jpg", "File:Mahakali_Kangra_painting.jpg", "File:Kalighat_Kali.jpg", "File:Dakshina_Kali.jpg", "Kali painting"],
    "tara": ["File:Tara_Mahavidya.jpg", "File:Tarapith_murti.jpg", "Mahavidya Tara painting", "File:Maa_Tara_Tarapith.jpg"],
    "tripura_sundari": ["File:Tripurasundari.jpg", "File:Goddess_Tripurasundari_seated_on_Shiva.jpg", "Tripurasundari painting", "Lalita Tripura Sundari"],
    "bhuvaneshvari": ["File:Bhuvaneshwari.jpg", "File:Raja_Ravi_Varma_-_Bhuvaneshwari.jpg", "Bhuvaneshwari painting"],
    "chhinnamasta": ["File:Chhinnamasta_Pahari.jpg", "File:Chinnamasta.jpg", "File:The_Goddess_Chhinnamasta_1800_Kangra.jpg", "Chhinnamasta Kangra"],
    "bhairavi": ["File:Bhairavi_Mahavidya.jpg", "Tripura Bhairavi painting", "File:Goddess_Bhairavi.jpg"],
    "dhumavati": ["File:Dhumavati.jpg", "File:Mahavidya_Dhumavati.jpg", "Dhumavati painting"],
    "bagalamukhi": ["File:Bagalamukhi.jpg", "File:Goddess_Bagalamukhi.jpg", "Bagalamukhi painting"],
    "matangi": ["File:Matangi_Mahavidya.jpg", "File:Goddess_Matangi.jpg", "Matangi painting"],
    "kamalatmika": ["File:Goddess_Kamala.jpg", "File:Kamalatmika.jpg", "File:Gaja_Lakshmi.jpg", "Goddess Kamala"],
    "sri_yantra": ["File:Sri_Yantra_2.svg", "File:Shree_Yantra.jpg", "File:Sri_Chakra.svg", "Sri Yantra"],
    "kali_yantra": ["File:Kali_Yantra.svg", "File:Kali_yantra.png", "Kali Yantra"],
    "pratyangira": ["File:Pratyangira.jpg", "File:Pratyangira_Devi.jpg", "Pratyangira temple"],
    "saraswati": ["File:Raja_Ravi_Varma_-_Saraswati.jpg", "Saraswati Ravi Varma"],
    "lakshmi": ["File:Raja_Ravi_Varma_-_Lakshmi.jpg", "Lakshmi Ravi Varma"],
    "durga": ["File:Raja_Ravi_Varma_-_Durga.jpg", "File:Durga_Mahisasuramardini_Kangra.jpg", "Mahishasuramardini painting"]
}

def check_file(title):
    api_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url|size|mime&format=json"
    req = urllib.request.Request(api_url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.loads(r.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            for pid, pdata in pages.items():
                if pid != "-1" and 'imageinfo' in pdata:
                    info = pdata['imageinfo'][0]
                    return info.get('url'), info.get('mime')
    except Exception as e:
        print(f"Error checking {title}: {e}")
    return None, None

def search_files(term):
    api_url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch={urllib.parse.quote(term)}&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|size|mime&format=json"
    req = urllib.request.Request(api_url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.loads(r.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            results = []
            for pid, pdata in pages.items():
                if 'imageinfo' in pdata:
                    info = pdata['imageinfo'][0]
                    results.append((pdata.get('title'), info.get('url'), info.get('mime')))
            return results
    except Exception as e:
        print(f"Error searching {term}: {e}")
    return []

print("Running lookup...")
found = {}
for key, terms in queries.items():
    print(f"\n--- Checking for {key} ---")
    matched = False
    for t in terms:
        time.sleep(1.2)
        if t.startswith("File:"):
            url, mime = check_file(t)
            if url:
                print(f"Direct match [{t}]: {url}")
                found[key] = (t, url)
                matched = True
                break
        else:
            res = search_files(t)
            if res:
                print(f"Search match [{t}]: {res[0][0]} -> {res[0][1]}")
                found[key] = (res[0][0], res[0][1])
                matched = True
                break
    if not matched:
        print(f"No direct file for {key}")

print(f"\nTotal matched: {len(found)} / {len(queries)}")
