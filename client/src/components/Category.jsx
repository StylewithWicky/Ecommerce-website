import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Category.css'

function Category() {
  const categories = [
    { name: 'Smartphones', slug: 'smartphones', image: '/Assets/phones.jpg' },
    { name: 'Laptops', slug: 'laptops', image: '/Assets/laptops.jpg' },
    { name: 'Accessories', slug: 'accessories', image: '/Assets/headphones.jpg' },
    { name: 'Smart Home', slug: 'smart-home', image: '/Assets/smart-home.jpg' },
    { name: 'Gaming', slug: 'gaming', image: '/Assets/gaming.jpg' },
    { name: 'Desktops', slug: 'desktops', image: '/Assets/desktops.jpg' },
    { name: 'Cameras', slug: 'cameras', image: '/Assets/cameras.jpg' },
  ]

  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link
            to={`/category/${category.slug}`}
            className="category-card"
            key={index}
          >
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Category
