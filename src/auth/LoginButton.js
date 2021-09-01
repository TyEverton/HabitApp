import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './login.css'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  return (
    !isAuthenticated && (
      <div>
        <section className="homeNavBar">
          <div className="homeBtns">
            <button onClick={() => loginWithRedirect()} className="loginBtn">
              LOGIN
            </button>
            <a
              href="https://github.com/TyEverton"
              target="_blank"
              rel="noreferrer"
            >
              <button
                class="devicon-github-original colored"
                rel="noreferrer"
              ></button>
              <a
                href="https://www.linkedin.com/in/ty-everton/"
                target="_blank"
                rel="noreferrer"
              >
                <button class="devicon-linkedin-plain colored"></button>
              </a>
            </a>
          </div>
        </section>
        <section className="welcomeContainer">
          <h1 className="welcomeQuote">
            "YOU ARE WHAT YOU REPEATEDLY DO EVERYDAY. SO WHATEVER YOU'RE DOING
            IS WHAT YOU BECOME. IF EXCELLENCE IS SOMETHING YOU'RE STRIVING FOR,
            THEN ITS NOT AN ACCIDENT. ITS A HABIT." -GREG PLITT
          </h1>
          <button onClick={() => loginWithRedirect()} className="getStartedBtn">
            GET STARTED
          </button>
        </section>
      </div>
    )
  )
}

export default LoginButton
