import os
from PIL import Image

NEW_UPLOADS = {
    'bhairavi': r'C:/Users/user/.gemini/antigravity/brain/22a3bbfd-ddb8-453b-9df5-362130c72a72/.user_uploaded/media_1795429452917_9be23856.jpg',
    'dhumavati': r'C:/Users/user/.gemini/antigravity/brain/22a3bbfd-ddb8-453b-9df5-362130c72a72/.user_uploaded/media_1795429498210_649bffab.jpg',
    'matangi': r'C:/Users/user/.gemini/antigravity/brain/22a3bbfd-ddb8-453b-9df5-362130c72a72/.user_uploaded/media_1795429735087_fc9c05f2.jpg',
    'kamalatmika': r'C:/Users/user/.gemini/antigravity/brain/22a3bbfd-ddb8-453b-9df5-362130c72a72/.user_uploaded/media_1795429778490_a0b82dd5.jpg',
}

target_public = r'D:/Maa Adishakti/public/images/devis'
target_dist = r'D:/Maa Adishakti/dist/images/devis'

os.makedirs(target_public, exist_ok=True)
os.makedirs(target_dist, exist_ok=True)

for name, src_path in NEW_UPLOADS.items():
    print(f"Processing {name} from {src_path}...")
    if not os.path.exists(src_path):
        print(f"ERROR: {src_path} does not exist!")
        continue
    
    with Image.open(src_path) as im:
        print(f"  Original: {im.size}, mode: {im.mode}")
        im_rgb = im.convert('RGB')
        
        # Resize cleanly to standard max 1000x1300 preserving aspect ratio perfectly
        max_size = (1000, 1300)
        im_rgb.thumbnail(max_size, Image.Resampling.LANCZOS)
        
        # Save to public
        p_path = os.path.join(target_public, f"{name}.jpg")
        im_rgb.save(p_path, 'JPEG', quality=92, optimize=True)
        print(f"  Saved public {p_path}: {im_rgb.size} ({os.path.getsize(p_path)} bytes)")
        
        # Save to dist
        d_path = os.path.join(target_dist, f"{name}.jpg")
        im_rgb.save(d_path, 'JPEG', quality=92, optimize=True)
        print(f"  Saved dist {d_path}: {im_rgb.size} ({os.path.getsize(d_path)} bytes)")
        
        # If kamalatmika, also save alias as kamala.jpg
        if name == 'kamalatmika':
            p_alias = os.path.join(target_public, "kamala.jpg")
            d_alias = os.path.join(target_dist, "kamala.jpg")
            im_rgb.save(p_alias, 'JPEG', quality=92, optimize=True)
            im_rgb.save(d_alias, 'JPEG', quality=92, optimize=True)
            print(f"  Saved aliases: {p_alias}")

print("\nSuccessfully updated Bhairavi, Dhumavati, Matangi, and Kamala images!")
