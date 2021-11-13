import React from 'react'
import SwagAcademy from '../svg/SwagAcademy.png';

const Incredible = () => {
    return (
      <section>
        <div className='incredible-box'>
          <div className=''>
            <h5>INCREDIBLE</h5>
            <h1>Unreaviled Features</h1>
            <p>
              The Program offers many things! Not only do you get a robust
              activity feed that allows you to build your own custom profile,
              directly message someone, or even a group chat with multiple
              people, we also offer unique quizzes after every lesson to ensure
              you’re retaining the information! There’s always something
              interesting going on inside the Academy.
            </p>
          </div>
          <div>
              <img src={SwagAcademy} alt='onboardimg2'/>
          </div>
          <div className='cursor-down'>
              v
          </div>
        </div>
      </section>
    );
}

export default Incredible
