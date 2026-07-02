from fastapi import FastAPI

app = FastAPI(
    title="LUNA-MAP API",
    description="AI-powered Lunar Navigation, Analysis & Mission Assistance Platform",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "project": "LUNA-MAP",
        "status": "Running 🚀"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }