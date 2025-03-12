from fastapi import APIRouter
from app.api.endpoints import categories, auth, menu_items

api_router = APIRouter()

api_router.include_router(
    auth.router,
    prefix="/auth",
    tags=["Authentication"]
)

api_router.include_router(
    categories.router,
    prefix="/categories",
    tags=["Categories"]
)

api_router.include_router(
    menu_items.router,
    prefix="/menu-items",
    tags=["Menu Items"]
)