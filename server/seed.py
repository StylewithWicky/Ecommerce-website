from app import create_app, db
from models import Category, Product

app = create_app()
with app.app_context():
    db.drop_all()
    db.create_all()

    electronics = Category(name="Electronics")
    fashion = Category(name="Fashion")

    db.session.add_all([electronics, fashion])
    db.session.commit()

    p1 = Product(name="Canon DSLR", price=1200.0, description="High quality camera.", image_url="/images/canon.jpg", category=electronics)
    p2 = Product(name="iPhone 14", price=999.99, description="Latest Apple phone", image_url="/images/iphone.jpg", category=electronics)
    p3 = Product(name="Sneakers", price=79.99, description="Comfortable fashion sneakers", image_url="/images/sneakers.jpg", category=fashion)

    db.session.add_all([p1, p2, p3])
    db.session.commit()
    print("✅ Seeded!")
