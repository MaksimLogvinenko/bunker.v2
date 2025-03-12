from fastapi import Header, Depends
from app.core.config import Settings, get_settings

def get_language(
    accept_language: str = Header(default='uk'),
    settings: Settings = Depends(get_settings)
) -> str:
    lang = accept_language.split(',')[0].lower()
    return lang if lang in settings.AVAILABLE_LANGUAGES else 'uk'
