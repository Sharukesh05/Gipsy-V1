from fastapi import APIRouter
from pydantic import BaseModel

from services.gemini_service import get_gemini_response

router = APIRouter(prefix="/chat", tags=["chat"])


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    response: str


@router.post("", response_model=ChatResponse)
def chat(request: ChatRequest):
    reply = get_gemini_response(request.message)
    return ChatResponse(response=reply)
