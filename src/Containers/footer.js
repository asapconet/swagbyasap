import React from 'react'
import swag_text_white from '../svg/swag_text_white.png'

const Footer = () => {
    return (
      <section className="footer-bkgrnd">
        <div className="foots">
          <div className='foots1'>
            <img src={swag_text_white} alt="" />
            <p>
              We help aspiring traders understand the Forex market through our
              immersive video course and the quizzes we created to go along side
              it. Inside the academy is a step by step video and written library
              that teaches you everything we feel you need to know about day
              trading!
            </p>
            <div>
              <a href="a.com">
                <img src="" alt="insta-icon" />
              </a>
              <a href="a.com">
                <img src="" alt="youtube-icon" />
              </a>
            </div>
          </div>
          <div className="foots2">
            <diV>
              <h4>Product</h4>
              <a href="a.com">Pricing</a>
              <a href="a.com">Reviews</a>
            </diV>
            <diV>
              <h4>Company</h4>
              <a href="a.com">About Us</a>
              <a href="a.com">Contact Us</a>
            </diV>
            <diV>
              <h4>Support</h4>
              <a href="a.com">Risk disclaimer</a>
              <a href="a.com">Refund Policy</a>
              <a href="a.com">Terms of Service</a>
            </diV>
          </div>
        </div>
        <div className="foots-end">
          <p>© The ASAPCONET 2021. All Rights Reserved.</p>
        </div>
      </section>
    );
}

export default Footer
