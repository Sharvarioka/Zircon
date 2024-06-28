import React from 'react';
import '../screens_styles/HomeScreenStyles.css'
import HomeFooter from './HomeFooter';
import HomeHeader from './HomeHeader';

const homeScreen = () => {
  return (
    <div className="Home">
      <HomeHeader />

      <div id="#primary" className="content-area">
        <div className="home-screen1-intro bg-color-light-green">
          <h1 className="home-intro-title">Skills speak louder than words</h1>
          <div className="home-intro-text">
            <p>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>
            <div className="home-screen1-buttons">
              <div className="home-sign-up-button">
                Sign Up
              </div>
              <div className="home-demo-button">
                Request Demo
              </div>
            </div>
            <p>Over 40% of developers worldwide and 3,000 companies use HackerRank</p>
          </div>
        </div>

        <div className="home-screen1-hiring">
          <div className="hiring-content">
            <h1 className="hiring-intro-title">It’s not a pipeline problem.<br />
              <span className="hiring-intro-subtitle">It’s a spotlight problem.</span>
            </h1>
          </div>
          <div className="hiring-text">
            <p>Tech hiring needs a reset. From prepping for jobs and practicing coding to running a world-class technical interview, give developers the tools they need to showcase their skills, passion, and potential.</p>
            <div className="hiring-nav">
              <h3>Prep</h3>
              <h3>Screen</h3>
              <h3>Interview</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni deserunt dolorum quod! Pariatur harum amet libero quibusdam aut quos tenetur numquam quas tempore error quasi quia repudiandae laborum magnam voluptatem vel commodi natus dignissimos minima deleniti, facilis mollitia, laboriosam saepe. Corrupti dolore doloremque eligendi fuga deserunt necessitatibus quidem, vel, illum itaque libero eaque eveniet quos saepe? Quisquam inventore voluptatibus quo amet debitis commodi, laborum, fugiat, voluptatum sapiente animi quibusdam consequatur qui maxime possimus veniam. Sunt dolore fugit asperiores ab? Totam enim quasi excepturi eligendi perspiciatis mollitia consectetur libero, iusto officiis facere dicta consequuntur ducimus quos sunt error vitae illum ab beatae itaque ad eos autem impedit rerum quidem? Qui asperiores perferendis earum adipisci assumenda commodi, inventore aliquam id dolore perspiciatis. Earum consectetur repudiandae repellendus velit deserunt mollitia, dignissimos, natus provident animi ut excepturi fuga optio aspernatur illum. Corrupti velit cum libero tenetur amet possimus, voluptate eaque molestias dolore minima nesciunt, quis magnam doloremque fuga enim ipsum placeat, voluptas aperiam explicabo corporis distinctio numquam? Asperiores quisquam iusto natus eum fugiat molestias ullam placeat ipsum numquam, dignissimos facilis minus mollitia ratione dicta. Nisi labore architecto itaque, deserunt illum fugiat repudiandae, incidunt fuga quas est corporis? Quasi commodi repellendus similique officiis impedit suscipit non beatae, quibusdam, illo aliquid reprehenderit, quidem rem alias perspiciatis quisquam recusandae ut quod ad tenetur unde. Consequatur eius impedit asperiores incidunt mollitia deserunt similique rerum animi culpa. Amet officia odio fuga, maiores provident praesentium accusantium voluptate nobis ipsa, reiciendis quis totam, obcaecati similique necessitatibus voluptatum voluptatibus dolor tenetur ipsum optio numquam laboriosam inventore. Doloremque, culpa. Ipsam, repudiandae facere! Odit corrupti voluptatibus qui aliquam accusantium, ut cupiditate facilis, vero omnis dolorem incidunt perspiciatis accusamus nostrum natus saepe esse animi neque ab voluptate eveniet error unde harum. Unde libero reiciendis earum sapiente distinctio, eligendi necessitatibus consequuntur, quis praesentium veritatis incidunt sint!</p>
          </div>

        </div>

        <div className="home-screen1-community bg-color-light-green">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
        </div>

        <div className="home-screen1-screen">Screen</div>

        <div className="home-screen1-interview .bg-color-light-green">
          <h1 className="home-intro-title">Interview like it's 2024</h1>
          <div className="home-intro-text">
            <p>Ditch out of reach and out of touch interview questions about golf balls and 747s — and turn off your clunky screen share for good. Code, create, and collaborate with an IDE built to showcase real-world skills in a real-world environment.</p>
            <div className="home-screen1-buttons">
              <div className="home-sign-up-button">Learn More</div>

            </div>
            <p>Over 40% of developers worldwide and 3,000 companies use HackerRank</p>
          </div>
        </div>

        <div className="home-screen1-about">
          <div className="home-about-left-content">
            <h1 className="home-about-title"> Every company is a tech company</h1>
            <h1 className="home-about-subtitle">We’re here to help ‘em all</h1>
            <div className="home-about-left-text">
              <p>
                More than 3,000 tech teams, representing all industries and from countries around the world, trust HackerRank to connect with developers and add cutting-edge skills to their teams.
              </p>
              <p>That includes 25% of the Fortune 100 and that moonshot startup that just came out of stealth.</p>
            </div>
          </div>
          <div className="home-about-left-content bg-color-light-green">
            <h2>Here is the heading</h2>
            That includes 25% of the Fortune 100 and that moonshot startup that just came out of stealth.
          </div>
        </div>

        <div className="home-screen1-links">
          <div className="home-about-left-content">
            <h1 className="home-about-title"> Practice coding challenges &</h1>
            <h1 className="home-about-subtitle">prep for interviews</h1>
            <div className="home-about-left-text">
              Start practicing your skills now and land the job
              of your dreams.
            </div>
            <div className="links-community-button">
              Join the community
            </div>
          </div>
          <div className="home-about-left-content bg-color-light-green">
            <h1 className="home-about-title"> Get started
              <span className="home-about-subtitle"> hiring with HackerRank</span></h1>
            <div className="home-about-left-text">
              More than 3,000 tech teams, representing all industries and from countries around the world, trust HackerRank
            </div>
            <div className="links-community-button">
              Request a demo
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />

    </div>
  );
}

export default homeScreen;