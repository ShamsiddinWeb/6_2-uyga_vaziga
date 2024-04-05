import React from "react";
import "./Hero.css";
import { AiFillApple } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__start">
          <div className="hero__card">
            <AiFillApple className="hero__card-img" />
            <p className="hero__card-text">iPhone 14 Series</p>
          </div>
          <h1 className="hero__title">Up to 10% off Voucher</h1>
          <a className="hero__link" href="#">
            <p className="hero__link-text">Shop Now</p>
            <BsArrowRight className="hero__link-img" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
