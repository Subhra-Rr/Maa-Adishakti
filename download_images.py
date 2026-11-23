import urllib.request
import json
import os
import time

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ShaktaEncyclopediaBot/1.0 (contact: academic research)'
}

def search_wikimedia(query):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrsearch={urllib.parse.quote(query)}&gsrlimit=10&prop=imageinfo&iiprop=url|mime|extmetadata"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            results = []
            for k, v in pages.items():
                title = v.get('title', '')
                info = v.get('imageinfo', [{}])[0]
                img_url = info.get('url', '')
                mime = info.get('mime', '')
                if mime.startswith('image/') and not mime.endswith('svg+xml') and not title.lower().endswith('.svg'):
                    results.append((title, img_url))
                elif title.lower().endswith('.jpg') or title.lower().endswith('.png') or title.lower().endswith('.jpeg'):
                    results.append((title, img_url))
            return results
    except Exception as e:
        print(f"Error searching for {query}: {e}")
        return []

print("Testing search for Kali...")
res = search_wikimedia("Mahavidya Kali painting")
for title, u in res[:3]:
    print("Found:", title, u)
