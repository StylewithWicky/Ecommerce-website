from app import create_app, db
from models import Category, Product

app = create_app()

# Optional: CLI for creating DB
@app.cli.command("create-db")
def create_db():
    db.create_all()
    print("📦 Database created!")

if __name__ == "__main__":
    app.run(debug=True)
