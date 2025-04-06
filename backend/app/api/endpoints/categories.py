from fastapi import APIRouter, Depends, Query, status
from typing import List, Optional, Union
from sqlalchemy.orm import Session
from app.schemas.category import CategoryCreate, CategoryUpdate

from app.db.database import get_db
from app.schemas.category import CategoryOut, CategoryWithItemsOut
from app.crud.crud_category import (
    create_category,
    delete_category,
    get_category_by_id,
    get_categories,
    get_categories_with_items,
    get_category_with_items_by_id,
    update_category,
)
from app.core.security import get_current_admin
from app.models.user import User

router = APIRouter()

@router.post("/", response_model=CategoryOut, status_code=status.HTTP_201_CREATED)
async def create_category_endpoint(
    category: CategoryCreate,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):
    return create_category(db, category)

@router.get("/", response_model=Union[List[CategoryOut], List[CategoryWithItemsOut]])
def get_categories_endpoint(
    skip: int = Query(0, ge=0, description="Number of skipped records"),
    limit: int = Query(100, ge=1, le=1000, description="Maximum number of records"),
    with_items: Optional[bool] = Query(False, alias="with-items", description="Include items in categories"),
    db: Session = Depends(get_db)
):
    if with_items:
        categories = get_categories_with_items(db, skip, limit)
        return [CategoryWithItemsOut.model_validate(c) for c in categories]
    categories = get_categories(db, skip, limit)
    return [CategoryOut.model_validate(c) for c in categories]

@router.get("/{category_id}", response_model=Union[CategoryOut, CategoryWithItemsOut])
def get_category_by_id_endpoint(
    category_id: int,
    with_items: Optional[bool] = Query(False, alias="with-items", description="Include items in categories"),
    db: Session = Depends(get_db)
):
    if with_items:
        category = get_category_with_items_by_id(db, category_id)
        return CategoryWithItemsOut.model_validate(category)
    category = get_category_by_id(db, category_id)
    return CategoryOut.model_validate(category)

@router.put("/{category_id}", response_model=CategoryOut)
def update_category_endpoint(
    category_id: int,
    category_data: CategoryUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin)
):
    return update_category(db, category_id, category_data)

@router.delete("/{category_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_category_endpoint(
    category_id: int,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin)
):
    delete_category(db, category_id)