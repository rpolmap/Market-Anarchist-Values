from pathlib import Path
from flask import Flask
from .test import test


def create_app():
    root_dir = Path(__file__).resolve().parent.parent

    app = Flask(
        __name__,
        template_folder=str(root_dir),
        static_folder=str(root_dir),
    )

    app.register_blueprint(test)
    return app