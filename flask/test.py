import json
from pathlib import Path
from flask import Flask

app = Flask(__name__)
DATA_PATH = Path(__file__).resolve().parent / "test.json"
with DATA_PATH.open("r", encoding="utf-8") as f:
    TEST = json.load(f)

