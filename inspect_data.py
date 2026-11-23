import re

with open('D:/Maa Adishakti/src/data/devis.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract devi definitions with id, name, categoryId, imagePath
matches = re.findall(r"id:\s*['\"]([^'\"]+)['\"].*?name:\s*['\"]([^'\"]+)['\"].*?categoryId:\s*['\"]([^'\"]+)['\"]", text, re.DOTALL)
print(f"Total devis in devis.ts: {len(matches)}")
for m in matches[:15]:
    print(m)

try:
    with open('D:/Maa Adishakti/src/data/supplementalDevis.ts', 'r', encoding='utf-8') as f:
        text2 = f.read()
    matches2 = re.findall(r"id:\s*['\"]([^'\"]+)['\"].*?name:\s*['\"]([^'\"]+)['\"].*?categoryId:\s*['\"]([^'\"]+)['\"]", text2, re.DOTALL)
    print(f"Total devis in supplementalDevis.ts: {len(matches2)}")
    for m in matches2[:15]:
        print(m)
except Exception as e:
    print("supplementalDevis:", e)
