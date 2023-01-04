import React from 'react'

export default function SearchResult({ result }) {
  return (
    <div className="search-products">
      <div className="products-content">
        {result.map((item) => (
          <p key={item.id}>{item.name.substring(0,45)}...</p>
        ))}
      </div>
    </div>
  )
}
