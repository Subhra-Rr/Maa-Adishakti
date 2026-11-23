import re

with open('D:/Maa Adishakti/src/data/supplementalDevis.ts', 'r', encoding='utf-8') as f:
    content = f.read()

supp_image_map = {
    'brahmani': '/images/devis/brahmani.jpg',
    'maheshwari': '/images/devis/maheshwari.jpg',
    'kaumari': '/images/devis/kaumari.jpg',
    'vaishnavi': '/images/devis/vaishnavi.jpg',
    'varahi': '/images/devis/varahi.jpg',
    'indrani': '/images/devis/indrani.jpg',
    'chamunda': '/images/devis/chamunda.jpg',
    'narasimhi': '/images/devis/narasimhi.jpg',
    'durga-prakriti': '/images/devis/durga.jpg',
    'lakshmi-prakriti': '/images/devis/mahalakshmi.jpg',
    'saraswati-prakriti': '/images/devis/mahasaraswati.jpg'
}

for dev_id, img_path in supp_image_map.items():
    id_pattern = rf"(id:\s*'{dev_id}',)"
    sub_check = rf"id:\s*'{dev_id}',\s*imagePath:"
    if not re.search(sub_check, content):
        content = re.sub(id_pattern, rf"\1\n    imagePath: '{img_path}',", content, count=1)

with open('D:/Maa Adishakti/src/data/supplementalDevis.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated supplementalDevis.ts successfully!")
