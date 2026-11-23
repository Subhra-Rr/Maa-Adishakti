import os
from PIL import Image

NEW_UPLOADS = {
    'radha': r'C:/Users/user/.gemini/antigravity/brain/22a3bbfd-ddb8-453b-9df5-362130c72a72/.user_uploaded/media_1795431045895_27e53fc9.jpg',
    'durga': r'C:/Users/user/.gemini/antigravity/brain/22a3bbfd-ddb8-453b-9df5-362130c72a72/.user_uploaded/media_1795431098370_b5d65a4e.jpg',
    'lakshmi': r'C:/Users/user/.gemini/antigravity/brain/22a3bbfd-ddb8-453b-9df5-362130c72a72/.user_uploaded/media_1795431132945_dc2e271d.jpg',
    'savitri': r'C:/Users/user/.gemini/antigravity/brain/22a3bbfd-ddb8-453b-9df5-362130c72a72/.user_uploaded/media_1795431187701_bdddef5e.jpg',
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
        
        # Max dimensions 1000x1300 preserving aspect ratio
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
        
        # If savitri, also save alias gayatri.jpg
        if name == 'savitri':
            p_alias = os.path.join(target_public, "gayatri.jpg")
            d_alias = os.path.join(target_dist, "gayatri.jpg")
            im_rgb.save(p_alias, 'JPEG', quality=92, optimize=True)
            im_rgb.save(d_alias, 'JPEG', quality=92, optimize=True)
            print(f"  Saved aliases: {p_alias}")

print("\nSuccessfully processed Radha, Durga, Lakshmi, and Savitri/Gayatri!")
