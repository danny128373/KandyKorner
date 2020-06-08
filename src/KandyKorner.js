import React, { useState, useEffect } from 'react'
import Login from './components/auth/Login'
import ApplicationViews from './components/ApplicationViews'
import NavBar from './components/nav/NavBar'

function KandyKorner(props) {

  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  const [hasUser, setHasUser] = useState(isAuthenticated())

  useEffect(() => {
    setHasUser(isAuthenticated());
  }, [])

  const setUser = (user) => {
    sessionStorage.setItem("credentials", JSON.stringify(user))
    setHasUser(isAuthenticated())
  }

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }

  return (
    <>
      {!hasUser
        ? <Login setUser={setUser} {...props} />
        : null}
      {hasUser
        ? <NavBar {...props} hasUser={hasUser} {...props} clearUser={clearUser} />
        : null}
      {hasUser ? <ApplicationViews />
        : null}
    </>
  )
}

export default KandyKorner