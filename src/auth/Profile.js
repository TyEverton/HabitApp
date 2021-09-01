import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import UserHabits from '.././Components/Habits/UserHabits'
import './profiles.css'

function Profile() {

  const { user, isAuthenticated } = useAuth0()
  return (
    isAuthenticated && (
      <div>
        <div className="profileBody">
          <div className="homeNavBar"></div>
          <h2>Welcome {user.name}!</h2>
          <UserHabits />
        </div>
  
      </div>
    )
  )
}

export default Profile
