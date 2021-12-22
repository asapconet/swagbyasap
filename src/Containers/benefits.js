import React from "react";
import {
  FaCentercode,
  FaChartLine,
  FaCrown,
  FaMagic,
  FaMoneyBill,
  FaPlay,
} from "react-icons/fa";

const Benefits = () => {
  return (
    <section className="benefit-box">
      <div className="top-box">
        <div className="main-box">
          <h1>Benefits</h1>
          <p>
            The Swag Academy is the home of the #1 FOREX YouTube channel in the
            world. When we say “Day Trading Forex Simplified,” we don’t mean
            trading in the market is easy. We mean, we break down a very complex
            market in a way where it’s easy to grasp and understand! Whether
            you’re a beginner or an advanced trader, there’s always something
            new you can learn. Our valued educational course is jam-packed with
            an infinite value. Here are some of the benefits of joining:
          </p>
        </div>
      </div>
      <div className="sub-container">
        <div className="sub-boxes">
          <FaChartLine className="icons" />
          <h3>Everything Forex</h3>
          <p>
            Everything we believe you need to understand Forex is in here! If by
            some chance it's not, we have a suggestion box where you can submit
            anything we may have missed that you’d like to see.
          </p>
        </div>
        <div className="sub-boxes">
          <FaPlay className="icons" />
          <h3>130+ Videos, PDF’s + Quizzes</h3>
          <p>
            The videos, pdf's and quizzes are fun, clever, and light-hearted as
            we try our best not to make them boring and monotonous.​ Similar to
            our YouTube channel, we try to entertain & educate!
          </p>
        </div>
        <div className="sub-boxes">
          <FaMagic className="icons" />
          <h3>Unreal Experience</h3>
          <p>
            This is not just a basic course. It's an unparalleled EXPERIENCE.
            Simply just having videos on a website is easy. It's different when
            you impact people with a once in a lifetime experience. You won't
            get this any where else.
          </p>
        </div>
      </div>
      <div className="sub-container">
        <div className="sub-boxes">
          <FaMoneyBill className="icons" />
          <h3>Refund Policy</h3>
          <p>
            Although it is digital content and 100% of colleges and 99% of those
            selling an online program don’t offer refunds, we’re proud to give
            you a refund if you meet our refund policy.
          </p>
        </div>
        <div className="sub-boxes">
          <FaCentercode className="icons" />
          <h3>Trading Element</h3>
          <p>
            We really TRADE here! A lot of people just give signals or post MT4
            screenshots after their winning trades and that's it. We believe a
            walkthrough process for wins AND losses is necessary for growth!
          </p>
        </div>
        <div className="sub-boxes">
        <FaCrown className="icons" />
          <h3>Swaggy C</h3>
          <p>
            There’s a reason you all gravitate towards me first on YouTube over
            any other YouTuber. No other course has ME. You won’t regret it!​
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
