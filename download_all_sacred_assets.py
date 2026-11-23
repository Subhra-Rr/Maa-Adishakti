import urllib.request
import json
import os
import time
from PIL import Image

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ShaktaEncyclopediaBot/1.0 (academic research; contact@shaktatattva.org)'
}

# The verified authentic URLs
DOWNLOAD_LIST = [
    # ==========================
    # 1. DAS MAHAVIDYAS
    # ==========================
    {
        "type": "devi",
        "id": "kali",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Kali_Tara.jpg",
        "alt_url": "https://upload.wikimedia.org/wikipedia/commons/6/67/How_to_draw_mahakali_mata_-_how_to_draw_kali_mata_easy_-_ma_kali_drawing_with_soft_pastels.jpg"
    },
    {
        "type": "devi",
        "id": "tara",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Tara_thangka.jpg"
    },
    {
        "type": "devi",
        "id": "tripura-sundari",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Tripurasundari.jpg"
    },
    {
        "type": "devi",
        "id": "bhuvaneshvari",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/43/Bhuvaneswari.jpg"
    },
    {
        "type": "devi",
        "id": "chhinnamasta",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Chinnamasta.jpg"
    },
    {
        "type": "devi",
        "id": "bhairavi",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Bhairavi.jpg"
    },
    {
        "type": "devi",
        "id": "dhumavati",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/30/Dhumavati.JPG"
    },
    {
        "type": "devi",
        "id": "bagalamukhi",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/09/Bagalamukhi.jpg"
    },
    {
        "type": "devi",
        "id": "matangi",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Goddess_Matangi.jpg"
    },
    {
        "type": "devi",
        "id": "kamalatmika",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/86/Gaja_Lakshmi.jpg"
    },

    # ==========================
    # 2. NAVA DURGAS
    # ==========================
    {
        "type": "devi",
        "id": "shailaputri",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Shailaputri_Sanghasri_2010_Arnab_Dutta.JPG"
    },
    {
        "type": "devi",
        "id": "brahmacharini",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/37/Brahmacharini.jpg"
    },
    {
        "type": "devi",
        "id": "chandraghanta",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Chandraghanta_Sanghasri_2010_Arnab_Dutta.JPG"
    },
    {
        "type": "devi",
        "id": "kushmanda",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/13/Kushmanda_Sanghasri_2010_Arnab_Dutta.JPG"
    },
    {
        "type": "devi",
        "id": "skandamata",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Skandamata_Sanghasri_2010_Arnab_Dutta.JPG"
    },
    {
        "type": "devi",
        "id": "katyayani",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Katyayani_Sanghasri_2010_Arnab_Dutta.JPG"
    },
    {
        "type": "devi",
        "id": "kalaratri",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Kalratri_Sanghasri_2010_Arnab_Dutta.JPG"
    },
    {
        "type": "devi",
        "id": "mahagauri",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Mahagauri_Sanghasri_2010_Arnab_Dutta.JPG"
    },
    {
        "type": "devi",
        "id": "siddhidatri",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Siddhidatri_Sanghasri_2010_Arnab_Dutta.JPG"
    },

    # ==========================
    # 3. TRIDEVI & PANCHA PRAKRITI
    # ==========================
    {
        "type": "devi",
        "id": "mahasaraswati",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Goddess_Saraswati_by_Raja_Ravi_Varma%2C_1896.jpg"
    },
    {
        "type": "devi",
        "id": "mahalakshmi",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Lakshmi_Devi_by_Raja_Ravi_Varma_2.JPG"
    },
    {
        "type": "devi",
        "id": "mahakali",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Kali_Tara.jpg"
    },
    {
        "type": "devi",
        "id": "durga",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/36/Goddess_Durga_by_Raja_Ravi_Varma.jpg"
    },
    {
        "type": "devi",
        "id": "radha",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/47/Radha_by_Raja_Ravi_Varma.jpg"
    },
    {
        "type": "devi",
        "id": "saraswati",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Goddess_Saraswati_by_Raja_Ravi_Varma%2C_1896.jpg"
    },
    {
        "type": "devi",
        "id": "lakshmi",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Lakshmi_Devi_by_Raja_Ravi_Varma_2.JPG"
    },

    # ==========================
    # 4. MATRIKAS
    # ==========================
    {
        "type": "devi",
        "id": "varahi",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/41/Varahi.jpg"
    },
    {
        "type": "devi",
        "id": "chamunda",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Chamunda.jpg"
    },
    {
        "type": "devi",
        "id": "brahmani",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/90/Brahmani%2C_Albert_Hall_Museum.jpg"
    },
    {
        "type": "devi",
        "id": "vaishnavi",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/6a/A_12th_century_Gardudaseen_Vaishnavi_sculpture_from_Bajhar%2C_Badwani%2C_Bhopal_State_Museum%2C_MP.jpg"
    },
    {
        "type": "devi",
        "id": "kaumari",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/53/Ishvari_Kumari.jpg"
    },

    # ==========================
    # 5. MAA PRATYANGIRA
    # ==========================
    {
        "type": "devi",
        "id": "pratyangira",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/41/Pratyangira1.jpg"
    },
    {
        "type": "devi",
        "id": "narasimhi",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/07/Paathaala_Pratyangira_Devi.jpg"
    },

    # ==========================
    # 6. ODISHA SHAKTA PEETHAS & TEMPLES
    # ==========================
    {
        "type": "temple",
        "id": "biraja_jajpur",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/23/BIRAJA_MAA_TEMPLE.jpg"
    },
    {
        "type": "temple",
        "id": "tara_tarini",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/07/Tara_Tarini_Temple_Ganjam.jpg"
    },
    {
        "type": "temple",
        "id": "hirapur_yogini",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/64_YOGINI_TEMPLE%2C_HIRAPUR%2C_ODISHA.jpg"
    },
    {
        "type": "temple",
        "id": "vimala_puri",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Vimala_Temple_Puri.jpg",
        "alt_url": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Jagannatha_Temple%2C_Puri.jpg"
    },
    {
        "type": "temple",
        "id": "samaleswari",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/64/Samaleswari_Temple_Sambalpur.jpg"
    },

    # ==========================
    # 7. 10 MAHAVIDYA YANTRAS & SRI YANTRA
    # ==========================
    {
        "type": "yantra",
        "id": "sri_yantra",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/24/Powerful_Sri_Chakra.jpg"
    },
    {
        "type": "yantra",
        "id": "kali_yantra",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/92/Kali_yantra_color.jpg"
    },
    {
        "type": "yantra",
        "id": "tara_yantra",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tara_yantra_color.jpg"
    },
    {
        "type": "yantra",
        "id": "tripura_sundari_yantra",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Tripura-sundari_yantra_color.jpg"
    },
    {
        "type": "yantra",
        "id": "bhuvaneshvari_yantra",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/da/Bhuvaneswari_yantra_color.jpg"
    },
    {
        "type": "yantra",
        "id": "chhinnamasta_yantra",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Chinnamasta_yantra_color.jpg"
    },
    {
        "type": "yantra",
        "id": "bhairavi_yantra",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Tripura-bhairavi_yantra_color.jpg"
    },
    {
        "type": "yantra",
        "id": "dhumavati_yantra",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Dhumavati_yantra_color.jpg"
    },
    {
        "type": "yantra",
        "id": "bagalamukhi_yantra",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bhagalamukhi_yantra_color.jpg"
    },
    {
        "type": "yantra",
        "id": "matangi_yantra",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Matangi_yantra_color.jpg"
    },
    {
        "type": "yantra",
        "id": "kamala_yantra",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Kamala_yantra_color.jpg"
    }
]

def download_and_process(item):
    item_type = item["type"]
    item_id = item["id"]
    url = item["url"]
    
    # Target directory and file
    if item_type == "devi":
        target_dir = "D:/Maa Adishakti/public/images/devis"
        ext = ".jpg"
    elif item_type == "yantra":
        target_dir = "D:/Maa Adishakti/public/images/yantras"
        ext = ".jpg"
    elif item_type == "temple":
        target_dir = "D:/Maa Adishakti/public/images/temples"
        ext = ".jpg"
    else:
        target_dir = "D:/Maa Adishakti/public/images"
        ext = ".jpg"
        
    os.makedirs(target_dir, exist_ok=True)
    out_path = os.path.join(target_dir, f"{item_id}{ext}")
    temp_path = os.path.join(target_dir, f"{item_id}_temp")
    
    print(f"Downloading [{item_type}] {item_id} from {url}...")
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = resp.read()
            with open(temp_path, "wb") as f:
                f.write(data)
                
        # Resize and optimize using Pillow
        with Image.open(temp_path) as im:
            im = im.convert("RGB")
            # Max width or height 800px to keep web performance snappy
            max_size = (800, 1000)
            im.thumbnail(max_size, Image.Resampling.LANCZOS)
            im.save(out_path, "JPEG", quality=88, optimize=True)
            
        if os.path.exists(temp_path):
            os.remove(temp_path)
        print(f" -> Successfully saved & optimized {out_path} ({os.path.getsize(out_path)} bytes)")
        return True
    except Exception as e:
        print(f" -> Error downloading {item_id}: {e}")
        if "alt_url" in item:
            print(f" -> Trying alt_url: {item['alt_url']}")
            try:
                req = urllib.request.Request(item["alt_url"], headers=HEADERS)
                with urllib.request.urlopen(req, timeout=20) as resp:
                    data = resp.read()
                    with open(temp_path, "wb") as f:
                        f.write(data)
                with Image.open(temp_path) as im:
                    im = im.convert("RGB")
                    im.thumbnail((800, 1000), Image.Resampling.LANCZOS)
                    im.save(out_path, "JPEG", quality=88, optimize=True)
                if os.path.exists(temp_path):
                    os.remove(temp_path)
                print(f" -> Successfully saved alt {out_path}")
                return True
            except Exception as e2:
                print(f" -> Alt failed too: {e2}")
        return False

print(f"Starting download and resize of {len(DOWNLOAD_LIST)} authentic sacred images...")
success_count = 0
for item in DOWNLOAD_LIST:
    if download_and_process(item):
        success_count += 1
    time.sleep(1.2)  # Polite pacing

print(f"\nCompleted! {success_count} / {len(DOWNLOAD_LIST)} images downloaded and optimized.")
