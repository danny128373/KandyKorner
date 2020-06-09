import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import './NavBar.css'

const NavBar = (props) => {

  const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
  }

  return (
    <>
      <header>
        <h1 className="site-title">
          Houchen's Kandy Kounter
          <br />
          <small>Best kandy inventory of all time.</small>
        </h1>
      </header>
      <nav>
        <ul className="container">
          <li><Link to="/" className="nav-link">Products</Link></li>
          <li><Link to="/employees" className="nav-link">Employees</Link></li>
          <li><Link to="/locations" className="nav-link">Locations</Link></li>
          <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default withRouter(NavBar)
