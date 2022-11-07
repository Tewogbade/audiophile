import React from "react";
import "../footer/Footer.css";
import section1mobile from "../../../images/home/shared/mobile/image-best-gear.jpg";
import section1tablet from "../../../images/home/shared/tablet/image-best-gear.jpg";
import section1desktop from "../../../images/home/shared/desktop/image-best-gear.jpg";
import audiophilelogo from "../../../images/home/shared/desktop/audiophilelogo.png";
import facebook from "../../../images/home/shared/desktop/icon-facebook.svg";
import twitter from "../../../images/home/shared/desktop/icon-twitter.svg";
import instagram from "../../../images/home/shared/desktop/icon-instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="fsection1">
        <div className="footer1top">
          {/* <img className="desktop" src={section1desktop} alt="" /> */}
          <img className="tablet" src={section1tablet} alt="" />
          <img className="mobile" src={section1mobile} alt="" />
        </div>
        <div className="footer1text">
          <h3>
            Bringing you the <span>best</span> audio gear
          </h3>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="footer1top">
          <img className="desktop" src={section1desktop} alt="" />
        </div>
      </div>
      <div className="fsection2">
        <div className="navitem">
          <img src={audiophilelogo} alt="" />
          <div className="navlink">
            <Link to="/">HOME</Link>
            <Link to="/headphones">HEADPHONES</Link>
            <Link to="/speakers">SPEAKERS</Link>
            <Link to="/earphones">EARPHONES</Link>
          </div>
        </div>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <div className="lastitem">
          <p>Copyright 2021. All Rights Reserved</p>
          <div className="links">
            <a href="#">
              <img src={facebook} alt="facebooklogo" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitterlogo" />
            </a>
            <a href="#">
              <img src={instagram} alt="instagramlogo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
