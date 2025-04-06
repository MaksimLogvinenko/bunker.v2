from fastapi import APIRouter, HTTPException, Depends, Form, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.core.config import Settings, get_settings
from app.core.security import create_access_token, verify_admin_token
from app.crud.crud_user import authenticate_user, create_admin_user
from app.schemas.auth import Token

router = APIRouter(tags=["Authentication"])

@router.post("/login", response_model=Token)
async def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
    settings: Settings = Depends(get_settings),
):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user or not user.is_admin:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(
        data={"sub": user.username},
        settings=settings,
    )
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/admins", status_code=status.HTTP_201_CREATED)
async def create_new_admin(
    username: str = Form(...),
    password: str = Form(...),
    db: Session = Depends(get_db),
    _: None = Depends(verify_admin_token)
):
    return create_admin_user(db, username, password)
