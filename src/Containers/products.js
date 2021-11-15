import React from "react";
import Button from "../Components/buttons";

const Products = () => {
  return (
    <section>
      <div className="product-ctner">
        <div className="general-cnter">
          <h3>PRODUCTS</h3>
          <h1>Plans & Pricing</h1>
          <p>
            Continuing education is very important for improving your <br />{" "}
            forex knowledge
          </p>
          <div>
            <div className="gen-cnter0">
              <div className="gen-cnter1">
                <h1>Swag Academy Enrollment</h1>
                <p>
                  The Swag Academy Team offers you two options to get you
                  started on your day trading journey. You can either take our
                  FREE program which does not have a pop-up upsell every two
                  seconds; so you can learn in peace. Or you can also take our
                  “Pro” program for those who are very serious about trading and
                  want to take their knowledge of the industry to the next
                  level. Not only are we active and constantly communicating
                  with our traders inside, we offer a variety of features that
                  can and will benefit you on your journey so your only focus is
                  on trading! We are confident you will love both.
                </p>
              </div>
              <div className="price-box">
                <div className="price-cnter">
                  <span>Free</span>
                  <h1>
                    $0 <span>usd</span>
                  </h1>
                  <>Unlimited access to free courses</>
                  <ul>
                    <li>Access free courses and lessons</li>
                    <li>Access free courses and lessons</li>
                    <li>Access free courses and lessons</li>
                    <li>Access free courses and lessons</li>
                  </ul>
                  <div className="btn-cnter">
                    <Button className="gen-btn">Get Started</Button>
                  </div>
                </div>

                <div className="price-cnter2">
                  <div className='pro-price'>
                    <span>
                      Pro
                      <p>$1499</p>
                    </span>
                    <div>
                        <img src='' alt='icon'/>
                    </div>
                  </div>
                  <h1>
                    $799 <span>usd</span>
                  </h1>
                  <>Unlimited access to paid courses</>
                  <ul>
                    <li>Everything Forex</li>
                    <li>130+ Videos, PDF’s + Quizzes</li>
                    <li>Community of Entrepreneurs</li>
                    <li>Custom-Built Profile</li>
                    <li>Have Your Own Private Group</li>
                    <li>Have Your Own Private Group</li>
                    <li>Ability to Message One Another</li>
                    <li>Lifetime Access</li>
                    <li>Access to Any & Everything</li>
                  </ul>
                  <div className="btn-cnter2">
                    <Button className="gen-btn2">Learn More</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
