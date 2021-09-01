import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './logout.css'

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0()
  return (
    isAuthenticated && (
      <div className="profileNav ">
        <button class="logoutBtn" onClick={() => logout()}>
          LOGOUT
        </button>
      </div>
    )
  )
}

export default LogoutButton
