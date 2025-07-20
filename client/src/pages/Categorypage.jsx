import React, { useEffect, useState } from 'react'
import CategoryBar from '../components/CategoryBar'
import SearchBar from '../components/SearchBar'
import ProductList from '../components/ProductList'

function CategoryPage() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data))

    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setFilteredProducts(data)
      })
  }, [])

  useEffect(() => {
    let filtered = [...products]
    if (selectedCategory) {
      filtered = filtered.filter(p => p.category_slug === selectedCategory)
    }
    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    setFilteredProducts(filtered)
  }, [searchTerm, selectedCategory, products])

  return (
    <div className="p-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryBar categories={categories} onSelect={setSelectedCategory} />
      <ProductList products={filteredProducts} />
      {filteredProducts.length === 0 && <p>No products found</p>}
    </div>
  )
}

export default CategoryPage

