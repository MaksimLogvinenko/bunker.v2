from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Restaurant Menu API"
    VERSION: str = "1.0.0"
    API_PREFIX: str = "/api/v1"
    DATABASE_URL: str = "sqlite:///./menu.db"
    ADMIN_TOKEN: str
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 365
    BACKEND_CORS_ORIGINS: list = ["*"]
    AVAILABLE_LANGUAGES: list[str] = ['uk', 'en']
    DEFAULT_LANGUAGE: str = 'uk'
    DEBUG: bool = False
    HOST: str = "0.0.0.0"
    PORT: int = 8000

    class Config:
        env_file = ".env"
        case_sensitive = True

def get_settings() -> Settings:
    return Settings()

settings = get_settings()
