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
                className="devicon-github-original colored"
                rel="noreferrer"
              ></button>
              <a
                href="https://www.linkedin.com/in/ty-everton/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="devicon-linkedin-plain colored"></button>
              </a>
            </a>
          </div>
        </section>
        <section className="welcomeContainer">
          <h1 className="welcomeQuote">
            "We first make our habits, and then our habits make us." - John Dryden
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
