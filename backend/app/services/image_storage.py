import cloudinary
import cloudinary.uploader
from fastapi import UploadFile
from app.core.config import settings

class CloudinaryService:
    def __init__(self):
        cloudinary.config(
            cloud_name=settings.CLOUDINARY_CLOUD_NAME,
            api_key=settings.CLOUDINARY_API_KEY,
            api_secret=settings.CLOUDINARY_API_SECRET,
            secure=True
        )

    def upload_image(self, file: UploadFile, folder: str = None) -> str:
        result = cloudinary.uploader.upload(
            file.file,
            folder=folder or settings.CLOUDINARY_FOLDER,
            use_filename=True
        )
        return result['secure_url']

image_service = CloudinaryService()