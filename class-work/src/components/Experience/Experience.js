import React from "react";
import "./Experience.css";

function Music() {
  return (
    <section className="music">
      <div className="container">
        <div className="music__start">
          <p className="music__text">Categories</p>
          <h2 className="music__title">Enhance Your Music Experience</h2>
          <div className="music__card">
            <span className="music__card-span">
              23 <b>Hours</b>
            </span>
            <span className="music__card-span">
              05 <b>Days</b>
            </span>
            <span className="music__card-span">
              59 <b>Minutes</b>
            </span>
            <span className="music__card-span">
              35 <b>Seconds</b>
            </span>
          </div>
          <button className="music__btn">Buy Now!</button>
        </div>
      </div>
    </section>
  );
}

export default Music;
