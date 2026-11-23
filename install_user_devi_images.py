import os
from PIL import Image

USER_UPLOADED = {
    'kali': r'C:/Users/user/.gemini/antigravity/brain/22a3bbfd-ddb8-453b-9df5-362130c72a72/.user_uploaded/media_1795428857695_0ba33363.jpg',
    'tara': r'C:/Users/user/.gemini/antigravity/brain/22a3bbfd-ddb8-453b-9df5-362130c72a72/.user_uploaded/media_1795428886417_3759a3e6.jpg',
    'tripura-sundari': r'C:/Users/user/.gemini/antigravity/brain/22a3bbfd-ddb8-453b-9df5-362130c72a72/.user_uploaded/media_1795428935581_31826721.jpg',
    'bhuvaneshvari': r'C:/Users/user/.gemini/antigravity/brain/22a3bbfd-ddb8-453b-9df5-362130c72a72/.user_uploaded/media_1795428967896_7673fd0a.jpg',
    'chhinnamasta': r'C:/Users/user/.gemini/antigravity/brain/22a3bbfd-ddb8-453b-9df5-362130c72a72/.user_uploaded/media_1795429007933_e0c9404e.jpg',
}

target_dir = r'D:/Maa Adishakti/public/images/devis'
os.makedirs(target_dir, exist_ok=True)

# Also ensure dist target dir exists if needed
dist_dir = r'D:/Maa Adishakti/dist/images/devis'
os.makedirs(dist_dir, exist_ok=True)

for name, src_path in USER_UPLOADED.items():
    print(f"Processing {name} from {src_path}...")
    if not os.path.exists(src_path):
        print(f"ERROR: {src_path} does not exist!")
        continue
    
    with Image.open(src_path) as im:
        orig_size = im.size
        orig_mode = im.mode
        print(f"  Original size: {orig_size}, mode: {orig_mode}")
        im_rgb = im.convert('RGB')
        
        # Resize cleanly to standard max 1000x1200 while preserving aspect ratio perfectly
        max_size = (1000, 1300)
        im_rgb.thumbnail(max_size, Image.Resampling.LANCZOS)
        
        # Save to public
        out_public = os.path.join(target_dir, f"{name}.jpg")
        im_rgb.save(out_public, 'JPEG', quality=92, optimize=True)
        print(f"  Saved {out_public}: {im_rgb.size} ({os.path.getsize(out_public)} bytes)")
        
        # Also copy to dist directly so dev or preview shows immediately
        out_dist = os.path.join(dist_dir, f"{name}.jpg")
        im_rgb.save(out_dist, 'JPEG', quality=92, optimize=True)
        print(f"  Saved {out_dist}: {im_rgb.size} ({os.path.getsize(out_dist)} bytes)")

print("\nAll 5 user-provided Devi images processed and saved successfully!")
