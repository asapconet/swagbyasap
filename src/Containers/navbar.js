import React from "react";
import { FaSearch } from "react-icons/fa";
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
          <ul className="nav-list">
            <li>
              company
              <ul className="sub-list1">
                <li>About</li>
                <li>Careers</li>
                <li>FAQ</li>
                {/* <a href="sum.com">v</a> */}
              </ul>
            </li>
            <li>
              education
              <ul className="sub-list2">
                <li>GOAT Acadamy</li>
                <li>Glossary</li>
                <li>News</li>
                <li>Books</li>
                {/* <a href="sum.com">v</a> */}
              </ul>
            </li>
            <li className="gunna">
              <a href="a.com">freeleaning</a>
            </li>
            <li className="gunna">
              <a href="a.com">pricing</a>
            </li>
            <li className="gunna">
              <a href="a.com">contanct</a>
            </li>
          </ul>
        </nav>
        <div className="btn-container">
          <div className="input-search">
            <input></input>
            <p>...</p>
            <FaSearch />
          </div>
          <Button>sign in</Button>
          <Button className="btn2">sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
