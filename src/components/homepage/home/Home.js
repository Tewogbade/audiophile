import React from "react";
import "../home/Home.css";
import section1desktop from "../../../images/home/desktop/image-hero.jpg";
import section1tablet from "../../../images/home/tablet/image-header.jpg";
import section1mobile from "../../../images/home/mobile/image-header.jpg";
import section2headphone from "../../../images/home/section2/xheadphones.png";
import section2speaker from "../../../images/home/section2/xspeakers.png";
import section2earphone from "../../../images/home/section2/xearphones.png";
import arrowright from "../../../images/home/section2/icon-arrow-right.svg";
import section3mobile from "../../../images/home/section3/mobile/image-speaker-zx9.png";
import section3tablet from "../../../images/home/section3/tablet/image-speaker-zx9.png";
import section3desktop from "../../../images/home/section3/desktop/image-speaker-zx9.png";

const home = () => {
  return (
    <>
      <div className="section1">
        <div className="home1images">
          <img className="desktop" src={section1desktop} alt="" />
          <img className="tablet" src={section1tablet} alt="" />
          <img className="mobile" src={section1mobile} alt="" />
        </div>
        <div className="home1texts">
          <p>New product</p>
          <h1>
            XX99 Mark II <br /> Headphones
          </h1>
          <h6>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </h6>
          <a href="#" className="btn">
            SEE PRODUCT
          </a>
        </div>
      </div>

      <div className="section2">
        <div className="pair">
          <img className="ximages" src={section2headphone} alt="" />
          <div className="greybox">
            <h6>Headphones</h6>
            <a href="#">
              Shop <img src={arrowright} alt="" />
            </a>
          </div>
        </div>
        <div className="pair">
          <img className="ximages" src={section2speaker} alt="" />
          <div className="greybox">
            <h6>Speakers</h6>
            <a href="#">
              Shop <img src={arrowright} alt="" />
            </a>
          </div>
        </div>
        <div className="pair">
          <img className="ximages" src={section2earphone} alt="" />
          <div className="greybox">
            <h6>Earphones</h6>
            <a href="#">
              Shop <img src={arrowright} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="orangeimages">
          <img className="desktop" src={section3mobile} alt="" />
          <img className="tablet" src={section3tablet} alt="" />
          <img className="mobile" src={section3desktop} alt="" />
        </div>
        <div className="orangetext">
          <h3>ZX9 speaker</h3>
          <h6>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </h6>
          <a href="#" className="btn">
            See product
          </a>
        </div>
      </div>
    </>
  );
};

export default home;
