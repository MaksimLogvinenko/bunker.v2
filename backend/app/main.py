# app/main.py
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text 
from sqlalchemy.orm import Session

from app.core.config import settings
from app.db.database import get_db
from app.api import routes

def create_application() -> FastAPI:
    # Create a FastAPI instance with settings
    app = FastAPI(
        title=settings.PROJECT_NAME,
        version=settings.VERSION,
        openapi_url=f"{settings.API_PREFIX}/openapi.json",
        docs_url="/docs",
        redoc_url="/redoc"
    )

    # CORS settings
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.BACKEND_CORS_ORIGINS,
        allow_credentials=False,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Connecting routers
    app.include_router(routes.api_router, prefix=settings.API_PREFIX)

    # Health check endpoint
    @app.get("/health", tags=["System"])
    async def health_check():
        return {"status": "ok"}

    # Checking the connection to the database
    @app.get("/check-db", tags=["System"])
    async def check_db_connection(db: Session = Depends(get_db)):
        try:
            db.execute(text("SELECT 1"))
            return {"database": "connected"}
        except Exception as e:
            return {"database": "error", "detail": str(e)}

    return app

app = create_application()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host=settings.HOST,
        port=settings.PORT,
        reload=settings.DEBUG
    )