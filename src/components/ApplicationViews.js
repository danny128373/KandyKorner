import React from 'react'
import { Route } from 'react-router-dom'
import ProductList from './products/ProductList'
import ProductForm from './products/ProductForm'
import ProductEditForm from './products/ProductEditForm'
import EmployeeList from './employees/EmployeeList'
import EmployeeForm from './employees/EmployeeForm'
import EmployeeEditForm from './employees/EmployeeEditForm'
import LocationList from './locations/LocationList'
import LocationForm from './locations/LocationForm'
import LocationEditForm from './locations/LocationEditForm'

export default function ApplicationViews() {
  return (
    <>
      <Route exact path="/" render={(props) => {
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
      <Route exact path="/employees" render={(props) => {
        return <EmployeeList {...props} />
      }} />
      <Route
        path="/employees/new"
        render={(props) => {
          return <EmployeeForm {...props} />
        }} />
      <Route
        path="/employees/:employeeId(\d+)/edit"
        render={(props) => {
          return <EmployeeEditForm {...props} />
        }} />
      {/* start of location routes */}
      <Route exact path="/locations" render={(props) => {
        return <LocationList {...props} />
      }} />
      <Route
        path="/locations/new"
        render={(props) => {
          return <LocationForm {...props} />
        }} />
      <Route
        path="/locations/:locationId(\d+)/edit"
        render={(props) => {
          return <LocationEditForm {...props} />
        }} />
    </>
  )
}
