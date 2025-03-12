from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, status
from sqlalchemy.orm import Session
from typing import List
from app.api.deps import get_language
from app.core.security import get_current_admin
from app.db.database import get_db
from app.schemas.menu import (
    MenuItemCreate,
    MenuItemOut,
    DiscountCreate,
)
from app.crud.crud_menu import (
    create_menu_item,
    get_menu_item,
    get_menu_items,
    update_menu_item,
    delete_menu_item,
    add_discount
)
from app.services.image_storage import image_service
from app.models.user import User

router = APIRouter()

@router.post("/", response_model=MenuItemOut, status_code=status.HTTP_201_CREATED)
async def create_new_menu_item(
    item_data: MenuItemCreate,
    image: UploadFile = File(None),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin)
):
    image_url = None
    if image:
        image_url = image_service.upload_image(image, folder="menu_items")
    return create_menu_item(db, item_data, image_url)

@router.get("/", response_model=List[MenuItemOut])
def get_all_menu_items(
    language: str = Depends(get_language),
    category_id: int = None,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    return get_menu_items(db, language, category_id, skip, limit)

@router.get("/{item_id}", response_model=MenuItemOut)
def get_single_menu_item(
    item_id: int,
    language: str = Depends(get_language),
    db: Session = Depends(get_db)
):
    item = get_menu_item(db, item_id, language)
    if not item:
        raise HTTPException(status_code=404, detail="Menu item not found")
    return item

@router.post("/{item_id}/discounts", status_code=status.HTTP_201_CREATED)
def add_new_discount(
    item_id: int,
    discount_data: DiscountCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin)
):
    return add_discount(db, item_id, discount_data)

@router.put("/{item_id}")
def update_existing_menu_item(
    item_id: int,
    item_data: MenuItemCreate,
    image: UploadFile = File(None),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin)
):
    image_url = None
    if image:
        image_url = image_service.upload_image(image, folder="menu_items")
    return update_menu_item(db, item_id, item_data, image_url)

@router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_existing_menu_item(
    item_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin)
):
    delete_menu_item(db, item_id)
    return {"ok": True}