import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  return (
    !isAuthenticated && (
      <div>
        <h1>Welcome to Habitual!</h1>
        <button onClick={() => loginWithRedirect()}>Register or Login</button>
      </div>
    )
  )
}

export default LoginButton
