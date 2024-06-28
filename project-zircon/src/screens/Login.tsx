import React from 'react';
import '../screens_styles/LoginStyles.css';

const Login = () => {
  return (
    <div className='login-screen-content'>
      <div className='left-content'>
        <div className='login-form'>
          <h1 className='login-title'>Login</h1>
          <p>to zircon</p>
          <input className='email-input-field' placeholder='Enter your email'></input>
          <div className='remember-me'>
            <input type='checkbox'></input>
            <label>Remember me</label>
          </div>
          <div className='next-button'>Next</div>
          <div className='or-div'>
            <hr />
            <span>Or</span>
            <hr />
          </div>
          <div className="bottom-button-text">
            <p>Don't have an account?<br />
              <span className="bottom-button-subtext">Contact sales</span> or <span className="bottom-button-subtext">get free trial</span>
            </p>
          </div>

        </div>
      </div>
      <div className='right-content'>
        <div className='right-inside-content'>
          <div className='login-right-title'>
            How to Build a Tech Talent Brand: The Definitive Guide
          </div>
          <p>Hiring tech talent? To recruit the best, you’ll need to have a world-class employer brand. To make your job easier, we’ve created the complete guide on how to build a tech talent brand.</p>
          <div className='read-more-button'>Read More</div>
        </div>

      </div>
    </div>
  )
}

export default Login