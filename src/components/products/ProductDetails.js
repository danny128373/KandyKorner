import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'

const ProductDetails = (props) => {
  const [product, setProduct] = useState({ name: "", price: "", location: "" })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ApiManager.getProductLocation(props.productId).then(product => {
      setProduct({
        name: product.product.name,
        price: product.product.price,
        location: product.location.name
      })
      setIsLoading(false)
    })
  }, [props.location])

  const handleDelete = () => {
    setIsLoading(true);
    ApiManager.delete(props.productId, 'products').then(() =>
      props.history.push("/")
    )
  }

  return (
    <div className="card">
      <h3>
        Name: <span style={{ color: "darkslategrey" }}>{product.name}</span>
      </h3>
      <p>Price: ${product.price}</p>
      <p>Location: {product.location}</p>
      <button type="button"
        onClick={() => props.history.push(`/products/${props.productId}/edit`)}>
        Edit
        </button>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
        Remove
        </button>
    </div>
  )
}

export default ProductDetails
