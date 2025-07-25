from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object("app.config.Config")

    db.init_app(app)
    CORS(app)

    from controller.Category_routes import category_bp
    app.register_blueprint(category_bp)

    return app
