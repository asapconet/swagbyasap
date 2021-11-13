import React from 'react'
import Updatedmockup1 from '../svg/Updatedmockup1.png'

const Featured = () => {
    return (
      <section>
        <div className='feature-box'>
          <div>
            <h5>FEATURES</h5>
            <h1>Our Exclusive App</h1>
          </div>
          <div className='main-box'>
            <div className='box-1'>
              <span>the tick</span>
              <h3>Mobile Ready</h3>
              <p>
                We have an insane mobile app! The mobile app allows you to get
                real-time notifications when someone comments on your status,
                direct messages you, or when there’s a new video added to the
                Academy! You can also watch every video within the academy, take
                every quiz, or read every PDF straight from your mobile app.
              </p>
            </div>
            <div className='box2'>
              <figure>
                <img src={Updatedmockup1} alt="mobile img" />
              </figure>
            </div>
          </div>
          <p>
            Our mobile app will be released shortly. Stay tuned for updates as
            we are going through the final approval stages with the Google Play
            and the App Store.
          </p>
          <p className='cursor-down'>v</p>
        </div>
      </section>
    );
}

export default Featured