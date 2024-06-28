import React from 'react';
import '../screens_styles/FreeTrialScreenStyles.css'

const FreeTrialScreen = () => {
  return (
    <div>
      <div className='sign-up-content'>
        <h1 className='title'>Create account</h1>
        <p>We’ll personalize your setup experience accordingly.</p>
        <div className='input-grid'>
          <div className='input-fields'>
            <label className='label-field'>Email</label>
            <input className='input-field'></input>
          </div>
          <div className='input-fields'>
            <label className='label-field'>Password</label>
            <input className='input-field'></input>
          </div>
          <div className='input-fields'>
            <label className='label-field'>First Name</label>
            <input className='input-field'></input>
          </div>
          <div className='input-fields'>
            <label className='label-field'>Last Name</label>
            <input className='input-field'></input>
          </div>
          <div className='input-fields'>
            <label className='label-field'>Country</label>
            <input className='input-field'></input>
          </div>
        </div>
        <div className='sign-up-button'>
          Start Free Trial
        </div>
        <p>By signing up, you agree to our master subscription agreement and privacy policy.</p>
      </div>
    </div>
  )
}

export default FreeTrialScreen