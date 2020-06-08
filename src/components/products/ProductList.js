import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'
import ProductCard from './ProductCard'

export default function ProductList(props) {
  const [products, setProducts] = useState([])

  const getProducts = () => {
    ApiManager.getAll("products").then(productsFromAPI => {
      setProducts(productsFromAPI)
    })
  }

  const deleteProduct = id => {
    ApiManager.delete(id, 'products')
      .then(() => ApiManager.getAll('products').then(setProducts));
  }

  useEffect(getProducts, [])

  return (
    <>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { props.history.push("/products/new") }}>
          Add New Product
        </button>
      </section>
      <div className="container-cards">
        {products.map(product => <ProductCard key={product.id} product={product} deleteProduct={deleteProduct} {...props} />)}
      </div>
    </>
  )
}
