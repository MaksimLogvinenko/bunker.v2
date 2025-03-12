from sqlalchemy.orm import Session
from app.models.category import Category, CategoryTranslation

def create_category(db: Session, translations: list, image_url: str = None) -> Category:
    db_category = Category(image_url=image_url)
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    
    for trans in translations:
        db_trans = CategoryTranslation(
            category_id=db_category.id,
            **trans.dict(),
        )
        db.add(db_trans)
    db.commit()
    return db_category

def get_category(db: Session, category_id: int, language: str) -> dict:
    category = db.query(Category).get(category_id)
    if not category:
        return None
    
    translation = next(
        (t for t in category.translations if t.language_code == language),
        next(t for t in category.translations if t.language_code == 'uk')
    )
    
    return {
        "id": category.id,
        "image_url": category.image_url,
        "name": translation.name,
        "description": translation.description
    }

def get_categories(
    db: Session,
    language: str,
    skip: int = 0,
    limit: int = 100
) -> list:
    categories = db.query(Category).offset(skip).limit(limit).all()
    result = []
    
    for category in categories:
        translation = next(
            (t for t in category.translations if t.language_code == language),
            next(t for t in category.translations if t.language_code == 'uk')
        )
        result.append({
            "id": category.id,
            "image_url": category.image_url,
            "name": translation.name,
            "description": translation.description
        })
    
    return result

def update_category(
    db: Session,
    category_id: int,
    translations: list,
    image_url: str = None
) -> Category:
    category = db.query(Category).get(category_id)
    if not category:
        return None
    
    if image_url:
        category.image_url = image_url
    
    # Оновлюємо переклади
    db.query(CategoryTranslation).filter(
        CategoryTranslation.category_id == category_id
    ).delete()
    
    for trans in translations:
        db_trans = CategoryTranslation(
            category_id=category.id,
            **trans.dict()
        )
        db.add(db_trans)
    
    db.commit()
    return category

def delete_category(db: Session, category_id: int) -> bool:
    category = db.query(Category).get(category_id)
    if category:
        db.delete(category)
        db.commit()
        return True
    return False
