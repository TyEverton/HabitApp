import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import UserHabits from '.././Components/Habits/UserHabits'


function Profile() {

  const { user, isAuthenticated } = useAuth0()
  return (
    isAuthenticated && (
      <div className="profileBody">
        <h2>Welcome {user.name}!</h2>
        <UserHabits />

      </div>
    )
  )
}

export default Profile
