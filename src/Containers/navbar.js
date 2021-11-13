import React from "react";
import "../App.scss";
import Button from "../Components/buttons";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-items">
        <div>
          <img
            src="https://www.theswagacademy.com/wp-content/uploads/2021/05/swag_text_white.png"
            alt="swaglogo"
          />
        </div>
        <nav>
          <ul>
            <li>
              company <a href="sum.com">v</a>
            </li>
            <li>
              education <a href="sum.com">v</a>
            </li>
            <li>freeleaning</li>
            <li>pricing</li>
            <li>contanct</li>
          </ul>
        </nav>
        <div>
          <input></input>
          <Button>sign in</Button>
          <Button className="btn2">sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
