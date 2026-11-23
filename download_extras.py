import urllib.request
import os
from PIL import Image

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ShaktaEncyclopediaBot/1.0'}

extras = [
    ("radha", "https://upload.wikimedia.org/wikipedia/commons/1/1f/Krishna_and_Radha%2C_National_Museum%2C_New_Delhi.jpg"),
    ("savitri", "https://upload.wikimedia.org/wikipedia/commons/8/81/Yama_And_Savitri%2C_from_a_painting_by_Nandalal_Bose.jpg")
]

target_dir = "D:/Maa Adishakti/public/images/devis"
for key, url in extras:
    out_file = os.path.join(target_dir, f"{key}.jpg")
    temp_file = os.path.join(target_dir, f"{key}_temp")
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=20) as resp:
            with open(temp_file, "wb") as f:
                f.write(resp.read())
        with Image.open(temp_file) as im:
            im = im.convert("RGB")
            im.thumbnail((800, 1000), Image.Resampling.LANCZOS)
            im.save(out_file, "JPEG", quality=88, optimize=True)
        if os.path.exists(temp_file):
            os.remove(temp_file)
        print(f"Saved {out_file}")
    except Exception as e:
        print(f"Error for {key}: {e}")
