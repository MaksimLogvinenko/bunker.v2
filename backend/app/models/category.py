from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app.db.base import Base


class Category(Base):
    __tablename__ = "categories"
    id = Column(Integer, primary_key=True)
    image_url = Column(String, nullable=True)
    name = Column(String(100))
    description = Column(String(500))

    menu_items = relationship("MenuItem", back_populates="category", lazy='noload')
