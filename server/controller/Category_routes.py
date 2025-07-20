from flask import Blueprint, jsonify
from models import Category, Product
from app import db

category_bp = Blueprint("category_bp", __name__, url_prefix="/api")

@category_bp.route("/categories", methods=["GET"])
def get_all_categories():
    categories = Category.query.all()
    data = []
    for cat in categories:
        products = [{
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "image_url": p.image_url,
        } for p in cat.products]

        data.append({
            "id": cat.id,
            "name": cat.name,
            "products": products
        })

    return jsonify(data), 200

@category_bp.route("/products", methods=["GET"])
def get_all_products():
    products = Product.query.all()
    data = [{
        "id": p.id,
        "name": p.name,
        "price": p.price,
        "description": p.description,
        "image_url": p.image_url,
        "category_id": p.category_id,
        "category_name": p.category.name
    } for p in products]

    return jsonify(data), 200
