import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './profiles.css'

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0()
  return isAuthenticated && <button class="logoutButton" onClick={() => logout()}>Logout</button>
}

export default LogoutButton
