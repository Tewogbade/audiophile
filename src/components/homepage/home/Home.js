import React from "react";
import "../home/Home.css";
import section1desktop from "../../../images/home/desktop/image-hero.jpg";
import section1tablet from "../../../images/home/tablet/image-header.jpg";
import section1mobile from "../../../images/home/mobile/image-header.jpg";
import section2headphone from "../../../images/home/shared/desktop/image-category-thumbnail-headphones.png";
import section2speaker from "../../../images/home/shared/desktop/image-category-thumbnail-speakers.png";
import section2earphone from "../../../images/home/shared/desktop/image-category-thumbnail-earphones.png";
import arrowright from "../../../images/home/shared/desktop/icon-arrow-right.svg";
import section3mobile from "../../../images/home/mobile/image-speaker-zx9.png";
import section3tablet from "../../../images/home/tablet/image-speaker-zx9.png";
import section3desktop from "../../../images/home/desktop/image-speaker-zx9.png";
import section3circles from "../../../images/home/desktop/pattern-circles.svg";
import section4mobile from "../../../images/home/mobile/image-speaker-zx7.jpg";
import section4tablet from "../../../images/home/tablet/image-speaker-zx7.jpg";
import section4desktop from "../../../images/home/desktop/image-speaker-zx7.jpg";
import section5mobile from "../../../images/home/mobile/image-earphones-yx1.jpg";
import section5tablet from "../../../images/home/tablet/image-earphones-yx1.jpg";
import section5desktop from "../../../images/home/desktop/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";

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

          <Link className="btn" to="/headphones/markii">
            SEE PRODUCT
          </Link>
        </div>
      </div>

      <div className="section2">
        <div className="pair">
          <img className="ximages" src={section2headphone} alt="" />
          <div className="greybox">
            <h6>Headphones</h6>

            <Link to="/headphones">
              Shop <img src={arrowright} alt="" />
            </Link>
          </div>
        </div>
        <div className="pair">
          <img className="ximages" src={section2speaker} alt="" />
          <div className="greybox">
            <h6>Speakers</h6>
            <Link to="/speakers">
              Shop <img src={arrowright} alt="" />
            </Link>
          </div>
        </div>
        <div className="pair">
          <img className="ximages" src={section2earphone} alt="" />
          <div className="greybox">
            <h6>Earphones</h6>
            <Link to="/earphones">
              Shop <img src={arrowright} alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="orangeimages">
          <img className="desktop" src={section3desktop} alt="" />
          <img className="tablet" src={section3tablet} alt="" />
          <img className="mobile" src={section3mobile} alt="" />
          {/* <img className="mobile" src={section3circles} alt="" /> */}
        </div>
        <div className="orangetext">
          <h3>
            ZX9 <br /> speaker
          </h3>
          <h6>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </h6>
          <Link to="/speakers/zx9speaker" className="btn">
            See product
          </Link>
        </div>
      </div>

      <div className="section4">
        <div className="greytext">
          <h3>ZX7 speaker</h3>
          <Link to="/speakers/zx7speaker" className="btn">
            See product
          </Link>
        </div>
        <img className="desktop" src={section4desktop} alt="" />
        <img className="tablet" src={section4tablet} alt="" />
        <img className="mobile" src={section4mobile} alt="" />
      </div>
      <div className="section5">
        <img className="desktop" src={section5desktop} alt="" />
        <img className="tablet" src={section5tablet} alt="" />
        <img className="mobile" src={section5mobile} alt="" />
        <div className="darktext">
          <h3> YX1 earphones</h3>
          <Link to="/earphones/yx1wirelessearphone" className="btn">
            See product
          </Link>
        </div>
      </div>
    </>
  );
};

export default home;
