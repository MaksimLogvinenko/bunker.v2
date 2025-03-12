from pydantic import BaseModel
from typing import Optional

class CategoryTranslationBase(BaseModel):
    language_code: str
    name: str
    description: Optional[str] = None

class CategoryCreate(BaseModel):
    translations: list[CategoryTranslationBase]
    image: Optional[str] = None

class CategoryOut(BaseModel):
    id: int
    name: str
    description: Optional[str]
    image_url: Optional[str]
