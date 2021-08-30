import './App.css'
import React from 'react'
// import {BrowserRouter, Route} from "react-router-dom"
// import Home from "./Components/Home"
// import Login from "./Components/Login"
// import Register from "./Components/Register"
// import UserHabits from "./Components/Habits"
import LoginButton from '.././src/auth/LoginButton'
import LogoutButton from '.././src/auth/LogoutButton'
import Profile from '.././src/auth/Profile'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isLoading } = useAuth0()
  if (isLoading) return <div>loading...</div>
  return (
    <div>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  )
}

export default App
