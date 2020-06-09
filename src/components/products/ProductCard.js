import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {

  return (
    <>
      <div className="card">
        <div className="card-content">
          <h3>Candy Name: <span>
            {props.product.name}
          </span></h3>
          <p>Price: ${props.product.price}</p>
          <Link to={`/products/${props.product.id}`}>
            <button>Details</button>
          </Link>
          <button type="button"
            onClick={() => props.history.push(`/products/${props.product.id}/edit`)}>
            Edit
          </button>
          <button type="button" onClick={() => props.deleteProduct(props.product.id)}>Remove</button>
        </div>
      </div>
    </>
  )
}
