import React, { useEffect, useState } from 'react'

import ApiManager from '../../modules/ApiManager'

function EmployeeDetails(props) {
  const [employee, setEmployee] = useState({ firstName: "", lastName: "", address: "", phone: "", locationId: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    ApiManager.getEmployeeLocation(props.employeeId).then(employee => {
      setEmployee({
        firstName: employee.firstName,
        lastName: employee.lastName,
        address: employee.address,
        phone: employee.phone,
        location: employee.location.name
      });
      setIsLoading(false);
    });
  }, [props.employeeId]);

  const handleDelete = () => {
    setIsLoading(true);
    ApiManager.delete(props.employeeId, 'employees').then(() =>
      props.history.push("/employees")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{employee.firstName} {employee.lastName}</span>
        </h3>
        <p>Address: {employee.address}</p>
        <p>Phone Number: {employee.phone}</p>
        <p>Location: {employee.location}</p>
        <button type="button"
          onClick={() => props.history.push(`/employees/${props.employeeId}/edit`)}>
          Edit
        </button>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Fired!
        </button>
      </div>
    </div>
  )
}

export default EmployeeDetails
