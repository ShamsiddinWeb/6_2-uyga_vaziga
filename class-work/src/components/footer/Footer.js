import React from "react";
import "./Footer.css";
import { ImQrcode } from "react-icons/im";
import App from "../../assets/icons/download-appstore.svg";
import Play from "../../assets/icons/GooglePlay.svg";
import { BiLogoFacebook } from "react-icons/bi";
import { TfiTwitter } from "react-icons/tfi";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

function Footer() {
  let nav = ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"];
  let Footer = nav?.map((value, index) => {
    return (
      <li classn="footer__list-list" key={index}>
        <a className="footer__list-link" href="#">
          {value}
        </a>
        <br />
        <br />
      </li>
    );
  });
  let navEnd = ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"];
  let FooterEnd = navEnd?.map((value, index) => {
    return (
      <li classn="footer__list-list" key={index}>
        <a className="footer__list-link" href="#">
          {value}
        </a>
        <br />
        <br />
      </li>
    );
  });

  return (
    <footer className="footer">
      <div className="footer__start">
        <div className="container">
          <div class="footer__card">
            <div className="footer__card-group">
              <a className="footer__links" href="index.html">
                Exclusive
              </a>
              <br />
              <br />
              <a className="footer__link" href="#">
                Subscribe
              </a>
              <p className="footer__text">Get 10% off your first order</p>
              <input
                className="footer__inp"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="footer__card-group">
              <a className="footer__links" href="#">
                Support
              </a>
              <p className="footer__text">
                111 Bijoy sarani, Dhaka, <br />
                DH 1515, Bangladesh.
              </p>
              <p className="footer__text">exclusive@gmail.com</p>
              <p className="footer__text">+88015-88888-9999</p>
            </div>
            <div className="footer__card-group">
              <a className="footer__links" href="#">
                Account
              </a>
              <ul className="footer__list">{Footer}</ul>
            </div>
            <div className="footer__card-group">
              <a className="footer__links" href="#">
                Quick Link
              </a>
              <ul className="footer__list">{FooterEnd}</ul>
            </div>
            <div className="footer__card-group">
              <a className="footer__links" href="#">
                Download App
              </a>
              <p className="footer__text">Save $3 with App New User Only</p>
              <div className="footer__img">
                <ImQrcode className="qrcode" />
              </div>
              <div className="footer__fecobook">
                <a href="https://twitter.com/?lang=ru" target="_blank">
                  <TfiTwitter />
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                  <BiLogoFacebook />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
