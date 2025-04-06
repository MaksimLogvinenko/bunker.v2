from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session
from typing import List, Optional
from app.core.security import get_current_admin
from app.db.database import get_db
from app.schemas.menu import (
    MenuItemCreate,
    MenuItemOut,
    MenuItemUpdate,
    DiscountCreate,
)
from app.crud.crud_menu import (
    create_menu_item,
    get_menu_item_by_id,
    get_menu_items,
    update_menu_item,
    delete_menu_item,
    add_discount
)
from app.models.user import User

router = APIRouter()

@router.post("/", response_model=MenuItemOut, status_code=status.HTTP_201_CREATED, summary="Create a new menu item")
async def create_menu_item_endpoints(
    item_data: MenuItemCreate,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin)
):
    return create_menu_item(db, item_data)

@router.get("/", response_model=List[MenuItemOut], summary="Get a list of menu items")
def get_menu_items_endpoint(
    category_id: Optional[int] = Query(
        None,
        description="ID of the menu category. If not specified, all categories are displayed.",
    ),
    is_available: Optional[bool] = Query(
        None,
        description="Whether the dish is available. If not specified, all items are displayed.",
    ),
    is_new: Optional[bool] = Query(
        None,
        description="Whether the dish is new. If not specified, all items are displayed.",
    ),
    skip: int = Query(0, ge=0, description="Number of skipped records"),
    limit: int = Query(100, ge=1, le=1000, description="Maximum number of records"),
    db: Session = Depends(get_db)
):
    return get_menu_items(db, category_id, is_available, is_new, skip, limit)

@router.get("/{item_id}", response_model=MenuItemOut, summary="Get a menu item by ID")
def get_menu_item_by_id_endpoint(
    item_id: int,
    db: Session = Depends(get_db)
):
    return get_menu_item_by_id(db, item_id)

@router.put("/{item_id}", response_model=MenuItemOut, summary="Update a menu item")
def update_menu_item_endpoint(
    item_id: int,
    item_data: MenuItemUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin)
):
    return update_menu_item(db, item_id, item_data)

@router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT, summary="Delete a menu item")
def delete_menu_item_endpoint(
    item_id: int,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin)
):
    delete_menu_item(db, item_id)

# @router.post("/{item_id}/discounts", status_code=status.HTTP_201_CREATED)
# def add_new_discount(
#     item_id: int,
#     discount_data: DiscountCreate,
#     db: Session = Depends(get_db),
#     current_user: User = Depends(get_current_admin)
# ):
#     return add_discount(db, item_id, discount_data)