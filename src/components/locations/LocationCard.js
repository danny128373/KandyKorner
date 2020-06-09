import React from 'react'
import { Link } from 'react-router-dom'

export default function LocationCard(props) {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h3>Location Name: <span>
            {props.locationn.name}
          </span></h3>
          <p>Address: {props.locationn.address}</p>
          <p>Phone Number: {props.locationn.phone}</p>
          <Link to={`/locations/${props.locationn.id}`}>
            <button>Details</button>
          </Link>
          <button type="button"
            onClick={() => props.history.push(`/locations/${props.locationn.id}/edit`)}>
            Edit
          </button>
          <button type="button" onClick={() => props.deleteLocation(props.locationn.id)}>Remove</button>
        </div>
      </div>
    </>
  )
}
