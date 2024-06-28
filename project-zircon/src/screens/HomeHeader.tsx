import React from 'react'
import '../screens_styles/HomeHeaderStyles.css'
const HomeHeader = () => {
  return (
    <div className="hr__site-header">
      <div className="hr-ribbon">
        <div className="container">
          <div className="hr_ribbon-notifications">
            <div className="hr_ribbon-notification">
              Welcome to zircon
            </div>
            {/* <div className="hr_ribbon-notification">
                Hire with ease
              </div>
              <div className="hr_ribbon-notification">
                Stand out in the crowd
              </div> */}
          </div>
          <div className="hr-ribbon-nav">
            <a href='https://www.w3schools.com' title="Previous notification"></a>
            <a href='https://www.w3schools.com' title="Next notification"></a>
          </div>
        </div>

      </div>
      <div className="header-top">
        <div className="menu-top-navigation-menu">
          <ul className="top-nativation-menu-items">
            <li className="nav-menu-item">Contact Us</li>
            <li className="nav-menu-item">Log In</li>
          </ul>
        </div>
      </div>

      <div id="header-sticky">
        <div className="container">
          <nav id="site-navigation" className="header-nav">
            <div id="site-branding">
              <a href="https://www.hackerrank.com/" title="Hackerrank">
                <img width="234" height="26" src="https://www.hackerrank.com/wp-content/uploads/2020/05/hackerrank_logo-Pride-1.gif" className="custom-logo" alt="Hackerrank logo"></img>
              </a>
            </div>

            {/* <div className="header-nav-menu"> */}
            <div className="menu-main-navigation-container">
              <ul className="menu-main-navigation">
                <li className="menu-list-item">Products</li>
                <li className="menu-list-item">Solutions</li>
                <li className="menu-list-item">Resources</li>
                <li className="menu-list-item">Pricing</li>
              </ul>
            </div>
            <div className="header-navigation-menu-right">
              <ul className="menu-main-navigation">
                <li className="menu-list-item">
                  For Developers</li>
                <li className="menu-list-item nav-demo-button">
                  Request Demo
                </li>
                <li className="menu-list-item nav-sign-up-button">
                  Sign Up
                </li>
              </ul>
            </div>
            {/* </div> */}
          </nav>

        </div>
      </div>
    </div>
  )
}

export default HomeHeader