import re

with open('D:/Maa Adishakti/src/data/devis.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Define image mappings for devis.ts
devi_image_map = {
    'kali': ('/images/devis/kali.jpg', '/images/yantras/kali_yantra.jpg'),
    'tara': ('/images/devis/tara.jpg', '/images/yantras/tara_yantra.jpg'),
    'tripura-sundari': ('/images/devis/tripura-sundari.jpg', '/images/yantras/tripura_sundari_yantra.jpg'),
    'bhuvaneshvari': ('/images/devis/bhuvaneshvari.jpg', '/images/yantras/bhuvaneshvari_yantra.jpg'),
    'chhinnamasta': ('/images/devis/chhinnamasta.jpg', '/images/yantras/chhinnamasta_yantra.jpg'),
    'bhairavi': ('/images/devis/bhairavi.jpg', '/images/yantras/bhairavi_yantra.jpg'),
    'dhumavati': ('/images/devis/dhumavati.jpg', '/images/yantras/dhumavati_yantra.jpg'),
    'bagalamukhi': ('/images/devis/bagalamukhi.jpg', '/images/yantras/bagalamukhi_yantra.jpg'),
    'matangi': ('/images/devis/matangi.jpg', '/images/yantras/matangi_yantra.jpg'),
    'kamalatmika': ('/images/devis/kamalatmika.jpg', '/images/yantras/kamala_yantra.jpg'),
    'shailaputri': ('/images/devis/shailaputri.jpg', None),
    'brahmacharini': ('/images/devis/brahmacharini.jpg', None),
    'chandraghanta': ('/images/devis/chandraghanta.jpg', None),
    'kushmanda': ('/images/devis/kushmanda.jpg', None),
    'skandamata': ('/images/devis/skandamata.jpg', None),
    'katyayani': ('/images/devis/katyayani.jpg', None),
    'kalaratri': ('/images/devis/kalaratri.jpg', None),
    'mahagauri': ('/images/devis/mahagauri.jpg', None),
    'siddhidatri': ('/images/devis/siddhidatri.jpg', None),
    'mahasaraswati': ('/images/devis/mahasaraswati.jpg', None),
    'mahalakshmi': ('/images/devis/mahalakshmi.jpg', None),
    'mahakali': ('/images/devis/mahakali.jpg', None),
    'pratyangira': ('/images/devis/pratyangira.jpg', None),
    'biraja-jajpur': ('/images/temples/biraja_jajpur.jpg', None),
    'tara-tarini': ('/images/temples/tara_tarini.jpg', None)
}

for dev_id, (img_path, yant_path) in devi_image_map.items():
    # Insert imagePath right after id: 'dev_id',
    id_pattern = rf"(id:\s*'{dev_id}',)"
    if img_path:
        # Check if imagePath already exists
        sub_check = rf"id:\s*'{dev_id}',\s*imagePath:"
        if not re.search(sub_check, content):
            content = re.sub(id_pattern, rf"\1\n    imagePath: '{img_path}',", content, count=1)
    
    # If yantra path exists, add imagePath to yantra object
    if yant_path:
        # Find yantra block for this devi
        # We can find yantra: { name: '...', ... }
        # Let's search from the devi id onwards
        pos = content.find(f"id: '{dev_id}'")
        if pos != -1:
            yant_pos = content.find("yantra: {", pos)
            # Make sure it's before the next top-level devi (id: ')
            next_devi = content.find("id: '", pos + 20)
            if yant_pos != -1 and (next_devi == -1 or yant_pos < next_devi):
                name_match = re.search(r"(yantra:\s*\{\s*name:\s*'[^']+',)", content[yant_pos:])
                if name_match:
                    orig_str = name_match.group(1)
                    repl_str = f"{orig_str}\n      imagePath: '{yant_path}',"
                    content = content[:yant_pos] + content[yant_pos:].replace(orig_str, repl_str, 1)

with open('D:/Maa Adishakti/src/data/devis.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated devis.ts successfully!")
