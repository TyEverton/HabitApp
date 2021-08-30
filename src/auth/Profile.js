import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import UserHabits from '.././Components/Habits/UserHabits'
import '../index.css'


import axios from '../axios'

function Profile() {
  useEffect(() => {
    axios.get('https://localhost:3000/profile').then((response) => {
      console.log(response.data)
    })
  }, [])

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
