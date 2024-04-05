import React from "react";
import "./Header.css";

import { AiOutlineMenu, AiOutlineHeart } from "react-icons/ai";
import { GrCart } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";

function Header() {
  let nav = ["Home", "Contact", "About", "Sign in"];
  let navList = nav?.map((value, index) => {
    return (
      <li classn="header__list-item" key={index}>
        <a className="header__list-link" href="#">
          {value}
        </a>
      </li>
    );
  });

  return (
    <header className="header">
      <div className="header__start">
        <div className="container">
          <div className="header__start-card">
            <p className="header__start-text">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <a href="#"> ShopNow </a>
            </p>
            <div className="header__start-group">
              <select className="header__start-seleck" name="country">
                <option value="Question type">English</option>
                <option value="nimadir">UZB</option>
                <option value="nimadir">RUS</option>
              </select>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="header__end">
        <div className="container">
          <div className="header__end-wrapper">
            <a className="header__link" href="#">
              Exclusive
            </a>
            <nav className="header__nav">
              <ul className="header__list">{navList}</ul>
            </nav>
            <div className="header__card">
              <form className="header__form" action="">
                <input
                  className="header__form-inp"
                  type="search"
                  placeholder="What are you looking for?"
                  required
                />
                <BsSearch className="header__form-search" />
              </form>
              <AiOutlineHeart className="header__menu" />
              <GrCart className="header__menu" />
              <AiOutlineMenu className="header__menu1" />
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
