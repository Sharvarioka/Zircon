import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className='header-banner'>
        <div className='nav-banner'></div>
        <div className='top-banner1'>
          <h6>Prepare</h6>
          <h2>Learn Programming Skills</h2>
        </div>
      </div>

      <div className='top-banner2'></div>
      <div className='heading'>Your Preparation</div>

      <div className='course-cards'>
        <div className="course-card">Problem Solving</div>
        <div className="course-card">C++</div>
        <div className="course-card">Python</div>
      </div>
      <div className='certification-section'>
        <div className='heading'>Your Preparation</div>
        <div className='certification-topics'>
          <div className='certification-topic'>Problem Solving(basics)</div>
          <div className='certification-topic'>Python(basics)</div>
        </div>
      </div>

      <div className='preparation-by-topic-section'>
        <div className='preparation-by-topic-heading'>Prepare By Topics</div>
        <div className='preparation-by-topic-content'>
          <div className='topic-card'>Algorithms</div>
          <div className='topic-card'>Data Structures</div>
          <div className='topic-card'>Mathematics</div>
          <div className='topic-card'>AI</div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard