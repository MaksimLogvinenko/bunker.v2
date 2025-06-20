from pydantic import BaseModel
from typing import Optional, List

from app.schemas.menu import MenuItemOut


class CategoryCreate(BaseModel):
    name: str
    description: Optional[str] = None
    image_url: Optional[str] = None
    ordering: Optional[int] = 1

class CategoryUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    image_url: Optional[str] = None
    ordering: Optional[int] = 1

class CategoryOut(BaseModel):
    id: int
    name: str
    description: Optional[str]
    image_url: Optional[str]
    ordering: int

    model_config = {
        "from_attributes": True,
    }

class CategoryWithItemsOut(BaseModel):
    id: int
    name: str
    description: Optional[str]
    image_url: Optional[str]
    ordering: int
    menu_items: Optional[List[MenuItemOut]] = None

    model_config = {
        "from_attributes": True,
    }