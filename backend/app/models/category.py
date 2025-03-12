from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from app.db.base import Base


class Category(Base):
    __tablename__ = "categories"
    id = Column(Integer, primary_key=True)
    image_url = Column(String)
    translations = relationship("CategoryTranslation", back_populates="category")

class CategoryTranslation(Base):
    __tablename__ = "category_translations"
    id = Column(Integer, primary_key=True)
    category_id = Column(Integer, ForeignKey("categories.id"))
    language_code = Column(String(2))
    name = Column(String(100))
    description = Column(String(500))
    category = relationship("Category", back_populates="translations")
