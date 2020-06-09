import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'
import EmployeeCard from './EmployeeCard'

export default function EmployeeList(props) {
  const [employees, setEmployees] = useState([])

  const getEmployees = () => {
    ApiManager.getAll("employees").then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    })
  }

  const deleteEmployee = id => {
    ApiManager.delete(id, 'employees')
      .then(() => ApiManager.getAll('employees').then(setEmployees));
  }

  useEffect(getEmployees, [])

  return (
    <>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { props.history.push("/employees/new") }}>
          Add New Employee
        </button>
      </section>
      <div className="container-cards">
        {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} deleteEmployee={deleteEmployee} {...props} />)}
      </div>
    </>
  )
}