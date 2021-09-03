import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import UserHabits from '.././Components/Habits/UserHabits'
import './profiles.css'
import Quotes from '.././Components/Quotes/Quotes'
import './menu.css'
import AddQuotes from '.././Components/Quotes/AddQuotes'
import MonthlyCalendar from './Calendar'

function Profile() {
  const { user, isAuthenticated } = useAuth0()
  return (
    isAuthenticated && (
      <div>
        <section className="profileNavBar">
          <div>
            <button className="menuBtn">MENU</button>
          </div>
        </section>
        <div className="profileBody">
          <div className="homeNavBar"></div>
          <h2>WELCOME {user.name}!</h2>
          <UserHabits />
          <Quotes />
          <AddQuotes />
          <MonthlyCalendar />
        </div>
      </div>
    )
  )
}

export default Profile
