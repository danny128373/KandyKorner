import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'

export default function ProductForm(props) {
  const [product, setProduct] = useState({ name: "", price: "", productTypeId: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [productTypes, setProductTypes] = useState([]);


  const handleFieldChange = event => {
    const stateToChange = { ...product }
    stateToChange[event.target.id] = event.target.value
    if (parseFloat(stateToChange[event.target.id]) < parseFloat(stateToChange[event.target.id]) + 1) {
      stateToChange[event.target.id] = parseFloat(stateToChange[event.target.id]);
    } else {
      stateToChange[event.target.id] = event.target.value;
    }
    setProduct(stateToChange);
  }

  const getProductTypes = () => {
    return ApiManager.getAll('productTypes').then(productType => {
      setProductTypes(productType)
    })
  }

  useEffect(() => {
    getProductTypes();
  }, [])

  const constructNewProduct = event => {
    event.preventDefault();
    if (product.name === "" || product.price === "" || product.productTypeId === "") {
      window.alert("Please input a product name, price, and type");
    } else {
      setIsLoading(true);
      ApiManager.post(product, 'products')
        .then(() => props.history.push("/"));
    }
  }

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Product name"
            />
            <label className="alignRight" htmlFor="price">Price</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="price"
              placeholder="Price"
            />
            <label htmlFor="productTypeId">Product Type:</label>
            <select className="alignRight" id="productTypeId" onChange={handleFieldChange} required>
              <option>Please select a product type</option>
              {productTypes.map(productType => <option key={productType.id} value={productType.id}>{productType.name}</option>)}
            </select>
          </div>
          <br />
          <button
            type="button"
            disabled={isLoading}
            onClick={constructNewProduct}
          >Submit</button>
        </fieldset>
      </form>
    </>
  )
}
