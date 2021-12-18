import React from "react";
import "../App.scss";
import Button from "../Components/buttons";
import SwagAcademyHero1 from "../svg/SwagAcademyHero1.png";


const Onboard = () => {
  return (
    <section className="onboarding">
      <div className="on-the-board">
          <div className="img-sec-sm">
            <img src={SwagAcademyHero1} alt="phot" />
          </div>
        <div className="stamp-sec">
          <div>
            <div className="frame">
              <span>X BEST EDUCATIONAL FOREX PROGRAM</span>
            </div>
          </div>
          <h1>
            <span>
              Day Tading <br />
            </span>
            Simplified
          </h1>
          <p>
            While trading in the market is hard no matter where you learn from,
            we help aspiring traders understand the Forex market by simplifying
            it for the average learner through our immersive video course and
            clever breakdowns by Swaggy C. Welcome to The Swag x GOAT Academy!
          </p>
          <Button className="general-btn">START NOW </Button>
        </div>
        <div className="image-sec">
          <div>
            <img src={SwagAcademyHero1} alt="phot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboard;
