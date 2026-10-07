# Gipsy

Full-stack application with a React + TypeScript frontend and FastAPI backend.

## Project Structure

```
Gipsy/
├── frontend/     # React + Vite + TypeScript
├── backend/      # FastAPI + Python
├── docs/         # Documentation
├── assets/       # Shared assets
└── README.md
```

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

## Backend Testing

No project-owned backend test suite is currently present. Pytest was checked and collected zero project tests. Until a backend test suite is added, deployment verification relies on application/build checks and manual smoke testing.

## Backend Deployment Notes

The currently tracked backend implements `GET /` and `POST /chat` only. Start it from `backend/` with:

```bash
python -m uvicorn main:app --host 0.0.0.0 --port ${PORT:-8001}
```

`GET /` is the health endpoint. Configure `GEMINI_API_KEY` as a hosting-platform secret. `GEMINI_MODEL_NAME` is optional and defaults to `gemini-1.5-flash`. Set `FRONTEND_ORIGINS` to the explicit deployed frontend origin(s), comma-separated; local Vite origins are used when it is unset. Never expose backend credentials through frontend `VITE_` variables.

The example also lists database, avatar, session, voice, provider-selection, and Ollama settings, but the currently tracked backend does not implement those features or read those settings. The local SQLite file is not used by this backend, so this version has no database or upload-volume persistence requirement. Reassess persistent storage before enabling persistence or upload routes. Ollama is not wired into this version. The Gemini service currently uses the deprecated `google-generativeai` SDK; the local startup reports a deprecation warning, so migrate that client before relying on long-term production support.
