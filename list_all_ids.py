import re

def list_ids(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()
    # Find { id: '...'
    matches = re.findall(r"\{\s*id:\s*['\"]([^'\"]+)['\"]", text)
    return matches

ids1 = list_ids('D:/Maa Adishakti/src/data/devis.ts')
print("devis.ts IDs:", len(ids1), ids1)

ids2 = list_ids('D:/Maa Adishakti/src/data/supplementalDevis.ts')
print("supplementalDevis.ts IDs:", len(ids2), ids2)
