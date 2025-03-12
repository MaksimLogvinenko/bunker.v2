from pydantic import BaseModel
from datetime import datetime

class MenuItemTranslationBase(BaseModel):
    language_code: str
    name: str
    description: str
    ingredients: str

class MenuItemCreate(BaseModel):
    category_id: int
    price: float
    translations: list[MenuItemTranslationBase]
    is_available: bool = True

class DiscountCreate(BaseModel):
    menu_item_id: int
    discount_type: str
    value: float
    start_date: datetime
    end_date: datetime

class MenuItemOut(BaseModel):
    id: int
    name: str
    description: str
    ingredients: str
    price: float
    discounted_price: float | None
    image_url: str | None
    category_id: int