import React, { useState, useEffect } from 'react'
import Login from './components/auth/Login'
import ApplicationViews from './components/ApplicationViews'

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

  return (
    <>
      {!hasUser
        ? <Login setUser={setUser} />
        : null}
      {/* <NavBar hasUser={hasUser} /> */}
      <ApplicationViews />
    </>
  )
}

export default KandyKorner