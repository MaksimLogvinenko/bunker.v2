from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.core.security import create_access_token, get_current_admin
from app.crud.crud_user import authenticate_user, create_admin_user
from app.schemas.auth import Token
from app.models.user import User

router = APIRouter(tags=["Authentication"])

@router.post("/login", response_model=Token)
async def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user or not user.is_admin:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(data={"sub": user.username})
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/admins", status_code=status.HTTP_201_CREATED)
async def create_new_admin(
    username: str,
    password: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin)
):
    return create_admin_user(db, username, password)