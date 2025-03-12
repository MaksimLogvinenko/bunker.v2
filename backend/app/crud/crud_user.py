from sqlalchemy.orm import Session
from app.models.user import User
from app.core.security import get_password_hash, verify_password, get_user


def authenticate_user(db: Session, username: str, password: str) -> User:
    user = get_user(db, username)
    if not user or not user.is_active:
        return None
    if not verify_password(password, user.hashed_password):
        return None
    return user

def create_admin_user(
    db: Session,
    username: str,
    password: str
) -> User:
    hashed_password = get_password_hash(password)
    db_user = User(
        username=username,
        hashed_password=hashed_password,
        is_admin=True
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def delete_user(db: Session, user_id: int) -> bool:
    user = db.query(User).get(user_id)
    if user:
        db.delete(user)
        db.commit()
        return True
    return False
