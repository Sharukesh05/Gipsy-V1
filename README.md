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
