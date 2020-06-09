import React from 'react'
import { Route } from 'react-router-dom'
import ProductList from './products/ProductList'
import ProductForm from './products/ProductForm'
import ProductEditForm from './products/ProductEditForm'

export default function ApplicationViews() {
  return (
    <>
      <Route exact path="/products" render={(props) => {
        return <ProductList {...props} />
      }} />
      <Route
        path="/products/new"
        render={(props) => {
          return <ProductForm {...props} />
        }} />
      <Route
        path="/products/:productId(\d+)/edit"
        render={(props) => {
          return <ProductEditForm {...props} />
        }} />
    </>
  )
}
