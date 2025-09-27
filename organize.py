import os
from PIL import Image
source_path="C:\\Users\\farza\\WebstormProjects\\Roboignite\\public\\Organize"
dest_path="C:\\Users\\farza\\WebstormProjects\\Roboignite\\public\\roboGallery"

os.makedirs(dest_path, exist_ok=True)

extension="jpg"
files = [f for f in os.listdir(source_path) if f.lower().endswith(extension.lower())]


for idx,file in enumerate(files,start=1):
    img_path = os.path.join(source_path, file)
    new_file_name = f"Day1_{idx:02d}.webp"
    save_path = os.path.join(dest_path, new_file_name)

    with Image.open(img_path) as img:
        img.save(save_path, "WEBP", quality=90)

    os.remove(img_path)

    print(f"Image {file} has been saved to destination as {new_file_name}")