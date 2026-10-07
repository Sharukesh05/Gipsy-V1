import google.generativeai as genai
from fastapi import HTTPException

from config import GEMINI_API_KEY, GEMINI_MODEL_NAME

if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel(GEMINI_MODEL_NAME)


def get_gemini_response(message: str) -> str:
    if not GEMINI_API_KEY:
        raise HTTPException(status_code=503, detail="Gemini is not configured.")

    try:
        response = model.generate_content(
            f"You are Gipsy, a helpful AI assistant. Respond warmly and briefly to: {message}"
        )
        reply = response.text
    except Exception:
        raise HTTPException(status_code=502, detail="Gemini request failed.") from None

    if not reply:
        raise HTTPException(status_code=502, detail="Gemini returned an empty response.")

    return reply
