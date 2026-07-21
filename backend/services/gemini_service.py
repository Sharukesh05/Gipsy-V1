import google.generativeai as genai
from config import GEMINI_API_KEY

if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-1.5-flash")


def get_gemini_response(message: str) -> str:
    if not GEMINI_API_KEY:
        return "Hello Sharukesh! I'm Gipsy."

    try:
        response = model.generate_content(
            f"You are Gipsy, a helpful AI assistant. Respond warmly and briefly to: {message}"
        )
        return response.text or "Hello Sharukesh! I'm Gipsy."
    except Exception:
        return "Hello Sharukesh! I'm Gipsy."
