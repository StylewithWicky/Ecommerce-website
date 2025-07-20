import React from 'react'

function CategoryBar({ categories, onSelect }) {
  return (
    <div className="flex overflow-x-auto mb-4 space-x-4">
      {categories.map(cat => (
        <button
          key={cat.slug}
          onClick={() => onSelect(cat.slug)}
          className="min-w-[100px] border p-2"
        >
          <img src={cat.image} alt={cat.name} className="h-12 w-full object-cover" />
          <p>{cat.name}</p>
        </button>
      ))}
    </div>
  )
}

export default CategoryBar