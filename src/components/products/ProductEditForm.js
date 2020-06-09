import React, { useState, useEffect } from 'react'
import ApiManager from "../../modules/ApiManager"

export default function ProductEditForm(props) {

  const [product, setProduct] = useState({ name: "", price: "" })
  const [isLoading, setIsLoading] = useState(false);
  const [productTypes, setProductTypes] = useState([])

  const handleFieldChange = event => {
    const stateToChange = { ...product }
    stateToChange[event.target.id] = event.target.value
    setProduct(stateToChange)
  }

  const handleFieldChangeProductType = (event) => {
    const stateToChange = { ...productTypes }
    stateToChange[event.target.id] = event.target.value
    setProductTypes(stateToChange)
  }

  const updateExistingProduct = (event) => {
    event.preventDefault()
    setIsLoading(true)

    // This is an edit, so we need the id
    const editedProduct = {
      id: props.match.params.productId,
      name: product.name,
      price: product.price
    }

    ApiManager.update(editedProduct, 'products')
      .then(() => props.history.push("/products"))
  }

  useEffect(() => {
    ApiManager.get(props.match.params.productId, 'products')
      .then(product => {
        setProduct(product)
        setIsLoading(false)
      })
  }, [])

  const getProductTypes = () => {
    return ApiManager.getAll('productTypes').then(productTypes => {
      setProductTypes(productTypes)
    })
  }

  useEffect(() => getProductTypes(), [])

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={product.name}
            />
            <label htmlFor="name">Product name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="price"
              value={product.price}
            />
            <label htmlFor="price">Price</label>
            {/* start of select options */}
            <label htmlFor="productTypeId">Type</label>
            <select className="form-control" id="productTypeId" onChange={handleFieldChangeProductType} required>
              <option>Please select a product type</option>
              {productTypes.map(productType => <option key={productType.id} id={productType.id}>{productType.name}</option>)}
            </select>
            {/* end of select options */}
          </div>

          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingProduct}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}
