import subprocess
import time
import urllib.request

proc = subprocess.Popen(['node', 'D:/Maa Adishakti/dev.js'])
time.sleep(3)

try:
    urls = [
        'http://localhost:5173/',
        'http://localhost:5173/images/devis/kali.jpg',
        'http://localhost:5173/images/yantras/sri_yantra.jpg',
        'http://localhost:5173/images/yantras/kali_yantra.jpg',
        'http://localhost:5173/images/devis/pratyangira.jpg',
        'http://localhost:5173/images/devis/tara.jpg',
        'http://localhost:5173/images/devis/shailaputri.jpg',
        'http://localhost:5173/images/devis/mahasaraswati.jpg'
    ]
    for u in urls:
        req = urllib.request.Request(u)
        with urllib.request.urlopen(req, timeout=5) as resp:
            data = resp.read()
            print(f"Status 200 OK: {u} ({len(data)} bytes, mime: {resp.headers.get('Content-Type')})")
finally:
    proc.terminate()
    proc.wait()
    print("Dev server stopped cleanly.")
