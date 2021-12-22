import React from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { CgMenuLeft, CgSearch } from "react-icons/cg";
import "../App.scss";
import Button from "../Components/buttons";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-items">
        <div className="img-lg">
          <img
            src="https://www.theswagacademy.com/wp-content/uploads/2021/05/swag_text_white.png"
            alt="swaglogo"
          />
        </div>
        <nav>
          {/* SMALL SCREEN NAVIGATOR */}
          <div className="small-screen-nav">
            <CgMenuLeft />
            <img
              className="img"
              src="https://www.theswagacademy.com/wp-content/uploads/2021/05/swag_text_white.png"
              alt="swaglogo"
            />
            <CgSearch />
          </div>

          {/* LARGE SCREEN NAV */}
          <ul className="nav-list">
            <li>
              company <FaAngleDown />
              <ul className="sub-list1">
                <li>About</li>
                <li>Careers</li>
                <li>FAQ</li>
                {/* <a href="sum.com">v</a> */}
              </ul>
            </li>
            <li>
              education <FaAngleDown />
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
        <div className="input-search">
          <FaSearch />
        </div>
        <div className="btn-container">
          <input></input>
          <p>...</p>
          <CgSearch className="search-lg" />
          <Button>sign in</Button>
          <Button className="btn2">sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
