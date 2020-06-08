import React from 'react'
import { Route } from 'react-router-dom'
import ProductList from './products/ProductList'
import ProductForm from './products/ProductForm'

export default function ApplicationViews() {
  return (
    <>
      <Route exact path="/products" render={(props) => {
        return <ProductList {...props} />
      }} />
      <Route
        path="/products/new"
        render={(props) => {
          return <ProductForm
            {...props}
          />
        }} />
    </>
  )
}
