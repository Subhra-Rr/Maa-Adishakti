import urllib.request
import json
import os
from PIL import Image

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ShaktaEncyclopediaBot/1.0 (academic research; contact@shaktatattva.org)'
}

# Key -> Wikimedia File Title
TITLES_TO_FETCH = {
    # Dhumavati
    "dhumavati": "File:Devi Dhumavati - Makeup.jpg",
    
    # Tridevi & Prakriti
    "mahasaraswati": "File:Goddess Saraswati - Raja Ravi Varma.jpg",
    "saraswati": "File:Goddess Saraswati - Raja Ravi Varma.jpg",
    "mahalakshmi": "File:Goddess Lakshmi by Raja Ravi Varma.jpg",
    "lakshmi": "File:Goddess Lakshmi by Raja Ravi Varma.jpg",
    "durga": "File:Goddess Durga by Raja Ravi Varma.jpg",
    "radha": "File:Radha by Raja Ravi Varma.jpg",
    
    # Matrikas
    "brahmani": "File:Brahmani, Albert Hall Museum.jpg",
    "vaishnavi": "File:Another statue of Vaishnavi, Varahi, Indrani and Camunda, National Museum, New Delhi.jpg",
    "kaumari": "File:Ishvari Kumari.jpg",
    "maheshwari": "File:Brahmani, Maheshwari and Kaumari Matrikas.jpg",
    "indrani": "File:Another statue of Vaishnavi, Varahi, Indrani and Camunda, National Museum, New Delhi.jpg",
    
    # Pratyangira
    "pratyangira": "File:Pratyangira1.jpg",
    "narasimhi": "File:Paathaala Pratyangira Devi.jpg",
    
    # Odisha Temples
    "biraja_jajpur": "File:Biraja Temple, Jajpur, Odisha, India, 13th century.jpg",
    "tara_tarini": "File:Tara Tarini Temple Ganjam.jpg",
    "samaleswari": "File:Samaleswari Temple Sambalpur.jpg"
}

print("Fetching direct URLs via Wikimedia API batch query...")
titles_list = list(set(TITLES_TO_FETCH.values()))
url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote('|'.join(titles_list))}&prop=imageinfo&iiprop=url&format=json"

req = urllib.request.Request(url, headers=HEADERS)
with urllib.request.urlopen(req, timeout=20) as r:
    data = json.loads(r.read().decode('utf-8'))

title_to_url = {}
for pid, pdata in data.get('query', {}).get('pages', {}).items():
    if pid != "-1" and 'imageinfo' in pdata and len(pdata['imageinfo']) > 0:
        title_to_url[pdata['title']] = pdata['imageinfo'][0]['url']

print(f"Resolved {len(title_to_url)} / {len(titles_list)} file URLs!")
for t, u in title_to_url.items():
    print(f"  {t} -> {u[:80]}...")

for key, title in TITLES_TO_FETCH.items():
    if title not in title_to_url:
        print(f"Skipping {key}, title not resolved: {title}")
        continue
    
    img_url = title_to_url[title]
    if key in ["biraja_jajpur", "tara_tarini", "samaleswari"]:
        target_dir = "D:/Maa Adishakti/public/images/temples"
    else:
        target_dir = "D:/Maa Adishakti/public/images/devis"
        
    os.makedirs(target_dir, exist_ok=True)
    out_file = os.path.join(target_dir, f"{key}.jpg")
    temp_file = os.path.join(target_dir, f"{key}_temp")
    
    print(f"Downloading {key} from {img_url}...")
    try:
        req = urllib.request.Request(img_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=20) as resp:
            with open(temp_file, "wb") as f:
                f.write(resp.read())
        with Image.open(temp_file) as im:
            im = im.convert("RGB")
            im.thumbnail((800, 1000), Image.Resampling.LANCZOS)
            im.save(out_file, "JPEG", quality=88, optimize=True)
        if os.path.exists(temp_file):
            os.remove(temp_file)
        print(f"Successfully processed {out_file} ({os.path.getsize(out_file)} bytes)")
    except Exception as e:
        print(f"Error processing {key}: {e}")
