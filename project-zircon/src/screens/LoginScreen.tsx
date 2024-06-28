import React from 'react'
import '../screens_styles/LoginScreenStyles.css'
import HomeHeader from './HomeHeader'
import HomeFooter from './HomeFooter'

const LoginScreen = () => {
  return (
    <div className='login-content'>
      <HomeHeader />
      <div className="login-main-content">
        <div className="login-left-content">
          <h1 className="login-title">For Companies</h1>
          <h1 className="login-subtitle">We’re here to help ‘em all</h1>
          <div className="login-left-text">
            We are the market–leading technical interview platform to identify and hire developers with the right skills.
          </div>
          <div className="login-green-button">
            Login
          </div>
          <div className="bottom-button-text">
            <p>Don't have an account?<br />
              <span className="bottom-button-subtext">Contact sales</span> or <span className="bottom-button-subtext">get free trial</span>
            </p>
          </div>

        </div>
        <div className="login-left-content bg-color-light-green">
          <h1 className="login-title">For Developers</h1>
          <h1 className="login-subtitle">We’re here to help ‘em all</h1>
          <div className="login-left-text">
            Join over 21 million developers, practice coding skills, prepare for interviews, and get hired.
          </div>
          <div className="login-white-button">
            Login
          </div>
          <div className="bottom-button-text">
            <p>Don't have an account?<br />
              <span className="bottom-button-subtext">Sign up</span>
            </p>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>

  )
}

export default LoginScreen