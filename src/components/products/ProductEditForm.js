import React, { useState, useEffect } from 'react'
import ApiManager from "../../modules/ApiManager"

export default function ProductEditForm(props) {

  const [product, setProduct] = useState({ name: "", price: "", productTypeId: "" })
  const [isLoading, setIsLoading] = useState(false);
  const [productTypes, setProductTypes] = useState([])

  // const handleFieldChange = event => {
  //   const stateToChange = { ...product }
  //   stateToChange[event.target.id] = event.target.value
  //   setProduct(stateToChange)
  // }

  const handleFieldChange = event => {
    const stateToChange = { ...product }
    stateToChange[event.target.id] = event.target.value
    console.log("edit productType", stateToChange[event.target.id])
    if (parseFloat(stateToChange[event.target.id]) < parseFloat(stateToChange[event.target.id]) + 1) {
      stateToChange[event.target.id] = parseFloat(stateToChange[event.target.id]);
    } else {
      // stateToChange[event.target.id] = event.target.value;
    }
    setProduct(stateToChange);
  }

  const updateExistingProduct = (event) => {
    event.preventDefault()
    setIsLoading(true)

    // This is an edit, so we need the id
    const editedProduct = {
      id: props.match.params.productId,
      name: product.name,
      price: product.price,
      productTypeId: product.productTypeId
    }

    ApiManager.update(editedProduct, 'products')
      .then(() => props.history.push("/"))
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

  useEffect(() => {
    getProductTypes()
  }, [])

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="name">Product name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={product.name}
            />

            <label htmlFor="price">Price</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="price"
              value={product.price}
            />
            {/* start of select options */}
            <label htmlFor="productTypeId">Type</label>
            <select className="form-control" id="productTypeId" onChange={handleFieldChange} required>
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
