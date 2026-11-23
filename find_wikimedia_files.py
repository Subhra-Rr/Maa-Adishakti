import urllib.request
import json
import time

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ShaktaTattva/1.0 (academic research)'}

# Exact authentic titles on Wikimedia Commons
CANDIDATES = [
    # 10 Mahavidyas
    ("kali", ["File:Kali_Tara.jpg", "File:Kalighat_Kali.jpg", "File:Mahakali.jpg", "File:Maha_Kali.jpg", "File:Raja_Ravi_Varma_-_Kali.jpg"]),
    ("tara", ["File:Tarapith_Kali.jpg", "File:Maa_Tara_Tarapith.jpg", "File:Goddess_Tara.jpg", "File:Buddhist_or_Hindu_Tara.jpg", "File:Tara_thangka.jpg"]),
    ("tripura_sundari", ["File:Tripurasundari.jpg", "File:Goddess_Tripurasundari.jpg", "File:Raja_Ravi_Varma_-_Tripura_Sundari.jpg", "File:Lalita_Tripurasundari.jpg"]),
    ("bhuvaneshvari", ["File:Bhuvaneshwari.jpg", "File:Goddess_Bhuvaneshwari.jpg", "File:Bhuvaneswari.jpg"]),
    ("chhinnamasta", ["File:Chinnamasta.jpg", "File:Chhinnamasta.jpg", "File:Goddess_Chhinnamasta.jpg"]),
    ("bhairavi", ["File:Bhairavi.jpg", "File:Goddess_Bhairavi.jpg", "File:Tripura_Bhairavi.jpg"]),
    ("dhumavati", ["File:Dhumavati.jpg", "File:Goddess_Dhumavati.jpg"]),
    ("bagalamukhi", ["File:Bagalamukhi.jpg", "File:Goddess_Bagalamukhi.jpg", "File:Pitambara_Bagalamukhi.jpg"]),
    ("matangi", ["File:Matangi.jpg", "File:Goddess_Matangi.jpg", "File:Raja_Matangi.jpg"]),
    ("kamalatmika", ["File:Gaja_Lakshmi.jpg", "File:Kamalatmika.jpg", "File:Goddess_Kamala.jpg", "File:Gajalaxmi.jpg"]),
    
    # Nava Durgas
    ("shailaputri", ["File:Shailaputri.jpg", "File:Maa_Shailputri.jpg", "File:Goddess_Shailputri.jpg"]),
    ("brahmacharini", ["File:Brahmacharini.jpg", "File:Maa_Brahmacharini.jpg"]),
    ("chandraghanta", ["File:Chandraghanta.jpg", "File:Maa_Chandraghanta.jpg"]),
    ("kushmanda", ["File:Kushmanda.jpg", "File:Maa_Kushmanda.jpg"]),
    ("skandamata", ["File:Skandamata.jpg", "File:Maa_Skandamata.jpg"]),
    ("katyayani", ["File:Katyayani.jpg", "File:Maa_Katyayani.jpg"]),
    ("kalaratri", ["File:Kalaratri.jpg", "File:Maa_Kalaratri.jpg"]),
    ("mahagauri", ["File:Mahagauri.jpg", "File:Maa_Mahagauri.jpg"]),
    ("siddhidatri", ["File:Siddhidatri.jpg", "File:Maa_Siddhidatri.jpg"]),
    
    # Tridevi & Major
    ("mahadurga", ["File:Durga_Mahisasuramardini.jpg", "File:Mahisasuramardini_Kangra.jpg", "File:Durga_puja.jpg", "File:Goddess_Durga.jpg"]),
    ("mahasaraswati", ["File:Raja_Ravi_Varma_-_Saraswati.jpg", "File:Saraswati.jpg", "File:Goddess_Saraswati.jpg"]),
    ("mahalakshmi", ["File:Raja_Ravi_Varma_-_Lakshmi.jpg", "File:Lakshmi.jpg", "File:Goddess_Mahalakshmi.jpg"]),
    ("mahakali", ["File:Mahakali.jpg", "File:Maha_Kali.jpg"]),
    
    # Matrikas
    ("varahi", ["File:Varahi.jpg", "File:Goddess_Varahi.jpg", "File:Varahi_sculpture.jpg"]),
    ("chamunda", ["File:Chamunda.jpg", "File:Goddess_Chamunda.jpg", "File:Chamunda_sculpture.jpg"]),
    ("vaishnavi", ["File:Vaishnavi.jpg", "File:Goddess_Vaishnavi.jpg"]),
    ("narasimhi", ["File:Narasimhi.jpg", "File:Pratyangira.jpg"]),
    ("kaumari", ["File:Kaumari.jpg", "File:Goddess_Kaumari.jpg"]),
    ("indrani", ["File:Indrani.jpg", "File:Aindri.jpg"]),
    ("brahmani", ["File:Brahmani.jpg", "File:Goddess_Brahmani.jpg"]),
    ("maheshwari", ["File:Maheshwari.jpg", "File:Goddess_Maheshwari.jpg"]),
    
    # Pratyangira
    ("pratyangira", ["File:Pratyangira.jpg", "File:Pratyangira_devi.jpg", "File:Goddess_Pratyangira.jpg"]),
    
    # Odisha Devis & Shrines
    ("vimala_puri", ["File:Vimala_Temple_Puri.jpg", "File:Goddess_Bimala_Puri.jpg", "File:Bimala_Temple.jpg"]),
    ("biraja_jajpur", ["File:Biraja_Temple_Jajpur.jpg", "File:Maa_Biraja.jpg", "File:Biraja_Temple.JPG"]),
    ("tara_tarini", ["File:Tara_Tarini_Temple.jpg", "File:Taratarini.jpg", "File:Tara_Tarini.jpg"]),
    ("samaleswari", ["File:Samaleswari_Temple_Sambalpur.jpg", "File:Samaleswari_Temple.jpg", "File:Samaleswari.jpg"]),
    ("hirapur_yogini", ["File:Chausath_Yogini_Temple_Hirapur.jpg", "File:Chausathi_Jogini_Temple.jpg", "File:64_Yogini_Temple_Hirapur.jpg"]),
    
    # Yantras
    ("sri_yantra", ["File:Sri_Yantra_2.svg", "File:Shree_Yantra.jpg", "File:Sri_Chakra.svg", "File:Sri_Yantra.png"]),
    ("kali_yantra", ["File:Kali_Yantra.svg", "File:Kali_yantra.png"]),
]

results = {}
for key, files in CANDIDATES:
    titles_param = "|".join([urllib.parse.quote(f) for f in files])
    url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={titles_param}&prop=imageinfo&iiprop=url|size|mime&format=json"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.loads(r.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            found_img = None
            for pid, pdata in pages.items():
                if pid != "-1" and 'imageinfo' in pdata and len(pdata['imageinfo']) > 0:
                    info = pdata['imageinfo'][0]
                    found_img = (pdata.get('title'), info.get('url'))
                    break
            if found_img:
                print(f"[FOUND] {key}: {found_img[0]} -> {found_img[1]}", flush=True)
                results[key] = found_img
            else:
                print(f"[MISSING] {key} - none of {files} found directly", flush=True)
    except Exception as e:
        print(f"[ERROR] {key}: {e}", flush=True)
    time.sleep(0.5)

print(f"\nSummary: {len(results)} out of {len(CANDIDATES)} found directly.", flush=True)
with open("D:/Maa Adishakti/found_images.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)
