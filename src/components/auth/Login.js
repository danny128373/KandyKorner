import React, { useState } from 'react'
import './Login.css'

export default function Login(props) {

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleFieldChange = (event) => {
    const stateToChange = { ...credentials };
    stateToChange[event.target.id] = event.target.value;
    setCredentials(stateToChange);
  }

  return (
    <>
      <header>
        <h1 className="site-title">
          Kandy Korner
        <br />
          <small>For all your kandy inventory needs.</small>
        </h1>
      </header>

      <form onSubmit={(event) => {
        event.preventDefault()
        props.setUser(credentials)
        props.history.push("/")
      }}>
        <fieldset>
          <label htmlFor="email">Email:</label>
          <input type="email" onChange={handleFieldChange} id="email" placeholder="Enter email" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password:</label>
          <input onChange={handleFieldChange} type="password" id="password" placeholder="Enter password" />
        </fieldset>
        <button type="submit">Sign in</button>
      </form>

    </>
  )
}
