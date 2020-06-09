import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'

export default function EmployeeForm(props) {
  const [employee, setEmployee] = useState({ firstName: "", lastName: "", address: "", phone: "", locationId: "", isSupervisor: false, username: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [locations, setLocations] = useState([]);

  const handleFieldChange = evt => {
    const stateToChange = { ...employee }
    stateToChange[evt.target.id] = evt.target.value
    if (stateToChange[evt.target.id].length === 1) {
      stateToChange[evt.target.id] = parseInt(evt.target.value)
    } else {
      stateToChange[evt.target.id] = evt.target.value
    }
    setEmployee(stateToChange);
  }

  const getLocations = () => {
    return ApiManager.getAll('locations').then(locations => {
      setLocations(locations)
    })
  }

  useEffect(() => {
    getLocations();
  }, [])

  const constructNewEmployee = event => {
    event.preventDefault();
    if (employee.firstName === "" || employee.lastName === "" || employee.address === "" || employee.phone === "" || employee.locationId === "" || employee.username === "") {
      window.alert("Please fill all inputs");
    } else {
      setIsLoading(true);
      ApiManager.post(employee, 'employees')
        .then(() => props.history.push("/employees"));
    }
  }

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="firstName"
              placeholder="First name"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="lastName"
              placeholder="Last name"
            />
            <label className="alignRight" htmlFor="address">Address</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="address"
              placeholder="Address"
            />
            <label className="alignRight" htmlFor="phone">Phone</label>
            <input
              type="phone"
              required
              onChange={handleFieldChange}
              id="phone"
              placeholder="Phone Number"
            />
            <label className="alignRight" htmlFor="username">Username</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="username"
              placeholder="Username"
            />
            <label className="alignRight" htmlFor="password">Password</label>
            <input
              type="password"
              required
              onChange={handleFieldChange}
              id="phone"
            />
            <label htmlFor="locationId">Product Type:</label>
            <select className="alignRight" id="locationId" onChange={handleFieldChange} required>
              <option>Please select a location</option>
              {locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}
            </select>
          </div>
          <br />
          <button
            type="button"
            disabled={isLoading}
            onClick={constructNewEmployee}
          >Submit</button>
        </fieldset>
      </form>
    </>
  )
}
