import React from "react";
import "./Featured.css";

function Featured() {
  return (
    <section className="featured">
      <div className="container">
        <div className="featured__start">
          <p className="category__text">Featured</p>
          <h2 className="category__title">New Arrival</h2>
          <div className="featured__wrapper">
            <div className="featured__card-first">
              <h3 className="featured__title">PlayStation 5</h3>
              <p className="featured__text">
                Black and White version of the PS5 coming out on sale.
              </p>
              <a className="featured__link" href="#">
                Shop Now
              </a>
            </div>
            <div className="featured__card-second">
              <div className="featured__card-third">
                <h3 className="featured__title">Women’s Collections</h3>
                <p className="featured__text">
                  Featured woman collections that give you another vibe.
                </p>
                <a className="featured__link" href="#">
                  Shop Now
                </a>
              </div>
              <div className="featured__card-fourth">
                <div className="featured__card-fifth">
                  <h3 className="featured__title">Speakers</h3>
                  <p className="featured__text">Amazon wireless speakers</p>
                  <a className="featured__link" href="#">
                    Shop Now
                  </a>
                </div>
                <div className="featured__card-sixth">
                  <h3 className="featured__title">Perfume</h3>
                  <p className="featured__text">GUCCI INTENSE OUD EDP</p>
                  <a className="featured__link" href="#">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
