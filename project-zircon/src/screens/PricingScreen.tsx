import React from 'react'
import '../screens_styles/PricingScreenStyles.css';
import HomeHeader from './HomeHeader'
import HomeFooter from './HomeFooter';

const PricingScreen = () => {
  return (
    <div>
      <HomeHeader />
      <div className='pricing-content'>
        <div className='pricing-plans-content'>
          <div className='pricing-text'>
            <h1>Transform your tech hiring today!</h1>
            <p>From interns to experienced hires, evaluate skills for any developer role including: software engineer, back-end, front-end, devops, data scientist, and QA/SDET</p>
          </div>
          <div className='pricing-plans'>
            <div className='pricing-plan'>
              Plan1
            </div>
            <div className='pricing-plan'>
              Plan2
            </div>
            <div className='pricing-plan'>
              Plan3
            </div>
          </div>

        </div>
      </div>
      <HomeFooter />
    </div>
  )
}

export default PricingScreen