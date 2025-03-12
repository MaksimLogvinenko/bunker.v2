from sqlalchemy import Column, DateTime, ForeignKey, Integer, Numeric, Boolean, String
from sqlalchemy.orm import relationship
from datetime import datetime
from app.db.base import Base

class MenuItem(Base):
    __tablename__ = "menu_items"
    id = Column(Integer, primary_key=True)
    category_id = Column(Integer, ForeignKey("categories.id"))
    price = Column(Numeric(10, 2))
    image_url = Column(String)
    is_available = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    translations = relationship("MenuItemTranslation", back_populates="menu_item")
    discounts = relationship("Discount", back_populates="menu_item")

class MenuItemTranslation(Base):
    __tablename__ = "menu_item_translations"
    id = Column(Integer, primary_key=True)
    menu_item_id = Column(Integer, ForeignKey("menu_items.id"))
    language_code = Column(String(2))
    name = Column(String(100))
    description = Column(String(500))
    ingredients = Column(String(500))
    menu_item = relationship("MenuItem", back_populates="translations")

class Discount(Base):
    __tablename__ = "discounts"
    id = Column(Integer, primary_key=True)
    menu_item_id = Column(Integer, ForeignKey("menu_items.id"))
    discount_type = Column(String(10))
    value = Column(Numeric(10, 2))
    start_date = Column(DateTime)
    end_date = Column(DateTime)
    is_active = Column(Boolean, default=True)
    menu_item = relationship("MenuItem", back_populates="discounts")
