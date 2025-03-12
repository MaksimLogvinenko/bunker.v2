from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, status
from typing import List
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.api.deps import get_language
from app.schemas.category import CategoryOut, CategoryTranslationBase
from app.crud.crud_category import (
    create_category,
    delete_category,
    get_category,
    get_categories,
    update_category,
)
from app.services.image_storage import image_service
from app.core.security import get_current_admin
from app.models.user import User

router = APIRouter()

@router.post("/", response_model=CategoryOut, status_code=status.HTTP_201_CREATED)
async def create_new_category(
    translations: List[CategoryTranslationBase],
    image: UploadFile = File(None),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin),
):
    image_url = None
    if image:
        image_url = image_service.upload_image(image, folder="categories")
    return create_category(db, translations, image_url)

@router.get("/", response_model=List[CategoryOut])
def get_all_categories(
    language: str = Depends(get_language),
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    return get_categories(db, language, skip, limit)

@router.get("/{category_id}", response_model=CategoryOut)
def get_single_category(
    category_id: int,
    language: str = Depends(get_language),
    db: Session = Depends(get_db)
):
    category = get_category(db, category_id, language)
    if not category:
        raise HTTPException(status_code=404, detail="Category not found")
    return category

@router.put("/{category_id}")
def update_existing_category(
    category_id: int,
    translations: List[CategoryTranslationBase],
    image: UploadFile = File(None),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin)
):
    image_url = None
    if image:
        image_url = image_service.upload_image(image, folder="categories")
    return update_category(db, category_id, translations, image_url)

@router.delete("/{category_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_existing_category(
    category_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin)
):
    delete_category(db, category_id)
    return {"ok": True}