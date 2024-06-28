import React from 'react';
import '../screens_styles/SignUpScreenStyles.css'

const SignUpScreen = () => {
  return (
    <div>
      <div className='sign-up-content'>
        <h1 className='title'>How do you want to use Zircon?</h1>
        <p>We’ll personalize your setup experience accordingly.</p>
        <ul>
          <li>
            <div className='opt'>
              <b>I am here to hire tech talent</b><br />
              Evaluate tech skills at scale
            </div>
          </li>
          <li>
            <div className='opt'>
              <b>I am here to practice and prepare</b><br />
              Solve problems and learn new things
            </div>
          </li>
        </ul>

        <div className='sign-up-button'>
          Create account
        </div>
      </div>
    </div>
  )
}

export default SignUpScreen