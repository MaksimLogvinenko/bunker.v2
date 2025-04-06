from fastapi import HTTPException, status
from typing import List, Optional
from sqlalchemy.orm import Session, joinedload, lazyload
from app.models.category import Category
from app.schemas.category import CategoryCreate, CategoryUpdate
from app.schemas.category import CategoryOut

def create_category(db: Session, category: CategoryCreate) -> Category:
    new_category = Category(**category.model_dump())
    db.add(new_category)
    db.commit()
    db.refresh(new_category)
    return new_category

def get_category_by_id(
        db: Session,
        category_id: int,
    ) -> Category:
    category = db.query(Category).filter(Category.id == category_id).first()
    
    if not category:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Category not found")
    
    return category

def get_category_with_items_by_id(
        db: Session,
        category_id: int,
    ) -> Category:
    query = db.query(Category).filter(Category.id == category_id)
    query = query.options(joinedload(Category.menu_items))
    category = query.first()

    if not category:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Category not found")
    
    return category

def get_categories(
    db: Session,
    skip: int = 0,
    limit: int = 100,
) -> List[Category]:
    return (
        db.query(Category)
        .order_by(Category.name)
        .offset(skip)
        .limit(limit)
        .all()
    )

def get_categories_with_items(
    db: Session,
    skip: int = 0,
    limit: int = 100,
) -> List[Category]:
    query = (
        db.query(Category)
        .order_by(Category.name)
        .offset(skip)
        .limit(limit)
    )
    query = query.options(joinedload(Category.menu_items))
    return query.all()


def update_category(
    db: Session,
    category_id: int,
    category_update: CategoryUpdate
    ,
) -> Category:
    category = get_category_by_id(db, category_id)
    update_data = category_update.model_dump(exclude_unset=True)
    if not category:
        return None
    
    for key, value in update_data.items():
        setattr(category, key, value)

    db.commit()
    db.refresh(category)
    return category

def delete_category(db: Session, category_id: int) -> None:
    category = get_category_by_id(db, category_id)
    db.delete(category)
    db.commit()
