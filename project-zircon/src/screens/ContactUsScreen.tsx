import React from 'react'
import '../screens_styles/ContactUsScreenStyles.css'
import HomeHeader from './HomeHeader'
import HomeFooter from './HomeFooter'

const ContactUsScreen = () => {
  return (
    <div>
      <HomeHeader />
      <div className='contact-us-content'>
        <div className='contact-us-left'>
          <h1 className='contact-us-title'>Let’s get in touch.</h1>
          <p >Talk to a member of our sales team to schedule a demo, pick the best plan for your team, or learn more about everything HackerRank has to offer.</p>
          <h2>Sales Inquiries</h2>
          <ul>
            <li>+1 (415) 900-4023 (US)</li>
            <li>+91 8880811222 (India)</li>
          </ul>
          <h2>Where To Find Us</h2>
          <ul>
            <li>10080 N. Wolfe Road Suite SW3-200 Cupertino, CA 95014</li>
          </ul>
          <h2>Support</h2>
          <ul>
            <li>Please visit our <span className='green-link'>support page</span> for more information</li>
          </ul>
          <p>Trusted by more than 3,000 tech organizations</p>
        </div>
        <div className='contact-us-left'>
          <div className='contact-us-form'>
            <h2>Contact Us</h2>
            <p>Please fill out the form below, and we'll contact you shortly.</p>
            <div className='input-fields'>
              <label className='label-field'>Email</label>
              <input className='input-field'></input>
            </div>

            <div className='input-fields'>
              <label className='label-field'>How can we help you?</label>
              <input className='input-field'></input>
            </div>
            <div className='contact-us-button'>Contact Us</div>

          </div>
        </div>

      </div>
      <HomeFooter />
    </div >
  )
}

export default ContactUsScreen