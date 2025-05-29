from fastapi import HTTPException, status
from typing import Optional, List
from sqlalchemy.orm import Session
from app.models.menu_item import MenuItem, Discount
from app.schemas.menu import MenuItemCreate, DiscountCreate, MenuItemOut, MenuItemUpdate

def create_menu_item(
    db: Session,
    item_data: MenuItemCreate,
) -> MenuItem:
    data = item_data.model_dump()
    if data.get("image_url") is not None:
        data["image_url"] = str(data["image_url"])
    item = MenuItem(**data)
    db.add(item)
    db.commit()
    db.refresh(item)
    return item

def get_menu_item_by_id(
    db: Session,
    item_id: int,
) -> MenuItem:
    item = db.query(MenuItem).filter(MenuItem.id == item_id).first()
    if not item:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Category not found")
    return item

def get_menu_items(
    db: Session,
    category_id: Optional[int] = None,
    is_available: Optional[bool] = None,
    is_new: Optional[bool] = None,
    skip: int = 0,
    limit: int = 100
) -> List[MenuItemOut]:
    query = (
        db.query(MenuItem)
        .order_by(MenuItem.category_id, MenuItem.ordering)
        .offset(skip)
        .limit(limit)
    )
    if query.count() != 0:
        if category_id is not None:
            query = query.filter(MenuItem.category_id == category_id)
        if is_available is not None:
            query = query.filter(MenuItem.is_available == is_available)
        if is_new is not None:
            query = query.filter(MenuItem.is_new == is_new)

    return query.all()
        

def update_menu_item(
    db: Session,
    item_id: int,
    item_data: MenuItemUpdate,
) -> MenuItem:
    item = get_menu_item_by_id(db, item_id)

    update_data = item_data.model_dump(exclude_unset=True)
    if "image_url" in update_data and update_data["image_url"] is not None:
        update_data["image_url"] = str(update_data["image_url"])

    for key, value in update_data.items():
        setattr(item, key, value)

    item = db.query(MenuItem).get(item_id)
    if not item:
        return None

    db.commit()
    db.refresh(item)

    return item

def delete_menu_item(db: Session, item_id: int) -> None:
    item = get_menu_item_by_id(db, item_id)
    db.delete(item)
    db.commit()

def add_discount(
    db: Session,
    item_id: int,
    discount_data: DiscountCreate
) -> Discount:
    db_discount = Discount(
        menu_item_id=item_id,
        **discount_data.dict()
    )
    db.add(db_discount)
    db.commit()
    db.refresh(db_discount)
    return db_discount

def calculate_discount(price: float, discount: Discount) -> float:
    if not discount:
        return None
    
    if discount.discount_type == "percent":
        return round(price * (1 - discount.value / 100), 2)
    elif discount.discount_type == "fixed":
        return round(price - discount.value, 2)
    return None