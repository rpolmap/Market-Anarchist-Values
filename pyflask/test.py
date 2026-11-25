import json
from pathlib import Path
from flask import Blueprint, render_template, abort

test = Blueprint("test", __name__)

DATA_PATH = Path(__file__).resolve().parent.parent / "json" / "test.json"
with DATA_PATH.open("r", encoding="utf-8") as f:
    TEST = json.load(f)

def get_Questions(data):
  categories = data.get("categories", [])
  text = []
  return text
@test.get("/question/<int:index>")
def show_question(index):
    text = get_Questions(TEST)
return render_template("test.html", question=text[index], next_index=next_index)

@test.get("/")
def test_home():
    return "test.py running"
