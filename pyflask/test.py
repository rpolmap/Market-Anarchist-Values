import json
from pathlib import Path
from flask import Blueprint

test = Blueprint("test", __name__)

DATA_PATH = Path(__file__).resolve().parent.parent / "json" / "test.json"
with DATA_PATH.open("r", encoding="utf-8") as f:
    TEST = json.load(f)


@test.get("/")
def test_home():
    return "test.py running"
