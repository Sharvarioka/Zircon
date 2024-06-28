import React from 'react';
import '../screens_styles/RequestDemoScreenStyles.css';
import HomeHeader from './HomeHeader'
import HomeFooter from './HomeFooter'

const RequestDemoScreen = () => {
  return (
    <div>
      <HomeHeader />
      <div className='contact-us-content'>
        <div className='contact-us-left'>
          <h1 className='contact-us-title'>See HackerRank in action.</h1>
          <div className='content-para'>
            <p>Attend a live demo with one of our product experts, who can share more about how we help teams like yours hire talent with the tech skills you need to innovate. You’ll see how to:</p>
            <p> - Standardize your hiring process</p>
            <p> - Screen and interview more effectively and without bias</p>
            <p> - Make informed, skills-based hiring decisions — every time</p>
          </div>


          <p>Trusted by more than 3,000 tech organizations</p>
        </div>
        <div className='contact-us-left'>
          <div className='contact-us-form'>
            <h2>Schedule a demo</h2>
            <p>Please fill out the form below, and we’ll contact you shortly.</p>
            <div className='input-fields'>
              <label className='label-field'>Email</label>
              <input className='input-field'></input>
            </div>
            <div className='contact-us-button'>Schedule a demo</div>

          </div>
        </div>

      </div>
      <HomeFooter />

    </div>
  )
}

export default RequestDemoScreen