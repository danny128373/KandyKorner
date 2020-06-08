import React from 'react'
import { Route } from 'react-router-dom'
import ProductList from './products/ProductList'

export default function ApplicationViews() {
  return (
    <div>
      <Route path="/products" render={(props) => {
        return <ProductList {...props} />
      }} />
    </div>
  )
}
