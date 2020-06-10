import React from 'react'
import { Link } from 'react-router-dom'

export default function EmployeeCard(props) {

  return (
    <>
      <div className="card">
        <div className="card-content">
          <h3>Employee Name: <span>
            {props.employee.firstName} {props.employee.lastName}
          </span></h3>
          <p>address: {props.employee.address}</p>
          <Link to={`/employees/${props.employee.id}`}>
            <button>Details</button>
          </Link>
          {/* <button type="button"
            onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>
            Edit
          </button> */}
          <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Remove</button>
        </div>
      </div>
    </>
  )
}
