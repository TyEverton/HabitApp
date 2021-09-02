import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import UserHabits from '.././Components/Habits/UserHabits'
import './profiles.css'
import Notes from ".././Components/Notes/Notes"
import Quotes from ".././Components/Quotes/Quotes"
import './menu.css'


function Profile() {

  const { user, isAuthenticated } = useAuth0()
  return (
    isAuthenticated && (
      <div>
        <section className="profileNavBar">
          <div>
            <button className="menuBtn">
              MENU
            </button>
          </div>
        </section>
        <div className="profileBody">
          <div className="homeNavBar"></div>
          <h2>WELCOME {user.name}!</h2>
          <UserHabits />
          <Notes />
          <Quotes />
        </div>
      </div>
    )
  )
}

export default Profile
