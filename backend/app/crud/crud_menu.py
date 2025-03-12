from datetime import datetime
from sqlalchemy.orm import Session
from app.models.menu_item import MenuItem, MenuItemTranslation, Discount
from app.schemas.menu import MenuItemCreate, DiscountCreate

def create_menu_item(
    db: Session,
    item_data: MenuItemCreate,
    image_url: str = None
) -> MenuItem:
    db_item = MenuItem(
        category_id=item_data.category_id,
        price=item_data.price,
        image_url=image_url,
        is_available=item_data.is_available
    )
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    
    for trans in item_data.translations:
        db_trans = MenuItemTranslation(
            menu_item_id=db_item.id,
            **trans.dict()
        )
        db.add(db_trans)
    
    db.commit()
    return db_item

def get_menu_item(
    db: Session,
    item_id: int,
    language: str
) -> dict:
    item = db.query(MenuItem).get(item_id)
    if not item:
        return None
    
    translation = next(
        (t for t in item.translations if t.language_code == language),
        next(t for t in item.translations if t.language_code == 'uk')
    )
    
    active_discount = next(
        (d for d in item.discounts if d.is_active and 
         d.start_date <= datetime.now() <= d.end_date),
        None
    )
    
    return {
        "id": item.id,
        "name": translation.name,
        "description": translation.description,
        "ingredients": translation.ingredients,
        "price": float(item.price),
        "discounted_price": calculate_discount(item.price, active_discount),
        "image_url": item.image_url,
        "category_id": item.category_id,
        "is_available": item.is_available
    }

def get_menu_items(
    db: Session,
    language: str,
    category_id: int = None,
    skip: int = 0,
    limit: int = 100
) -> list:
    query = db.query(MenuItem)
    if category_id:
        query = query.filter(MenuItem.category_id == category_id)
    
    items = query.offset(skip).limit(limit).all()
    result = []
    
    for item in items:
        translation = next(
            (t for t in item.translations if t.language_code == language),
            next(t for t in item.translations if t.language_code == 'uk')
        )
        
        active_discount = next(
            (d for d in item.discounts if d.is_active and 
             d.start_date <= datetime.now() <= d.end_date),
            None
        )
        
        result.append({
            "id": item.id,
            "name": translation.name,
            "price": float(item.price),
            "discounted_price": calculate_discount(item.price, active_discount),
            "image_url": item.image_url,
            "category_id": item.category_id
        })
    
    return result

def update_menu_item(
    db: Session,
    item_id: int,
    item_data: MenuItemCreate,
    image_url: str = None
) -> MenuItem:
    item = db.query(MenuItem).get(item_id)
    if not item:
        return None
    
    item.category_id = item_data.category_id
    item.price = item_data.price
    item.is_available = item_data.is_available
    
    if image_url:
        item.image_url = image_url
    
    # Оновлюємо переклади
    db.query(MenuItemTranslation).filter(
        MenuItemTranslation.menu_item_id == item_id
    ).delete()
    
    for trans in item_data.translations:
        db_trans = MenuItemTranslation(
            menu_item_id=item.id,
            **trans.dict()
        )
        db.add(db_trans)
    
    db.commit()
    return item

def delete_menu_item(db: Session, item_id: int) -> bool:
    item = db.query(MenuItem).get(item_id)
    if item:
        db.delete(item)
        db.commit()
        return True
    return False

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