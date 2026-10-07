import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from routes.chat import router as chat_router

load_dotenv()

app = FastAPI(title="Gipsy API", version="1.0.0")

frontend_origins_setting = os.getenv("FRONTEND_ORIGINS")
frontend_origins = (
    [origin.strip() for origin in frontend_origins_setting.split(",") if origin.strip()]
    if frontend_origins_setting
    else []
)
if not frontend_origins or "*" in frontend_origins:
    raise ValueError("FRONTEND_ORIGINS must contain explicit frontend origins.")

app.add_middleware(
    CORSMiddleware,
    allow_origins=frontend_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router)


@app.get("/")
def health_check():
    return {"status": "ok", "message": "Gipsy backend is running"}
