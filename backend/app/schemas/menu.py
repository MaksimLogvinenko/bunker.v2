from pydantic import BaseModel, HttpUrl
from datetime import datetime
from typing import Optional

class MenuItemCreate(BaseModel):
    name: str
    category_id: int
    description: Optional[str] = None
    price: float
    image_url: Optional[HttpUrl] = None
    is_available: bool = True
    is_new: bool = False
    ingredients: Optional[str] = None
    portion_size: Optional[str] = None
    ordering: Optional[int] = 1 

class MenuItemUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    category_id: Optional[int] = None
    price: Optional[float] = None
    image_url: Optional[HttpUrl] = None
    is_available: Optional[bool] = None
    is_new: Optional[bool] = None
    ingredients: Optional[str] = None
    portion_size: Optional[str] = None
    ordering: Optional[int] = 1

class MenuItemOut(BaseModel):
    id: int
    name: str
    description: Optional[str]
    category_id: int
    price: float
    image_url: Optional[str]
    is_available: bool
    is_new: bool
    ingredients: Optional[str]
    portion_size: Optional[str]
    created_at: datetime
    ordering: int

    model_config = {
        "from_attributes": True,
    }

class DiscountCreate(BaseModel):
    menu_item_id: int
    discount_type: str
    value: float
    start_date: datetime
    end_date: datetime