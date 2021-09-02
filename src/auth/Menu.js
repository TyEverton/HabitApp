import React from "react"
import { useAuth0 } from '@auth0/auth0-react'

const Menu = () => {
  const {isAuthenticated} = useAuth0()
  return (
    isAuthenticated && (
      <div>
        <button>ABOUT</button>
        <button>CONTACT</button>
        <button>FUTURE</button>
      </div>
    )
  )
}

export default Menu