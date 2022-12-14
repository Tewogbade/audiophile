import React from "react";
import "../earphones/Earphones.css";
import { Link } from "react-router-dom";

import earphonesyx1m from "../../images/earphones/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import earphonesyx1t from "../../images/earphones/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import earphonesyx1d from "../../images/earphones/product-yx1-earphones/desktop/image-category-page-preview.jpg";

import section2headphone from "../../images/home/shared/desktop/image-category-thumbnail-headphones.png";
import section2speaker from "../../images/home/shared/desktop/image-category-thumbnail-speakers.png";
import section2earphone from "../../images/home/shared/desktop/image-category-thumbnail-earphones.png";
import arrowright from "../../images/home/shared/desktop/icon-arrow-right.svg";

const Earphones = () => {
  return (
    <>
      <div className="header">
        <h4>earphones</h4>
      </div>
      <div className="earphones">
        <div className="Zx9">
          <div className="earphonesimages">
            <img className="mobile" src={earphonesyx1m} alt="" />
            <img className="tablet" src={earphonesyx1t} alt="" />
            <img className="desktop" src={earphonesyx1d} alt="" />
          </div>
          <div className="earphonestext">
            <h6>New product</h6>
            <h2>
              YX1 wireless
              <br /> earphones
            </h2>
            <p>
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <Link to="/earphones/yx1wirelessearphone" className="btn">
              See product
            </Link>
          </div>
        </div>

        <div className="lastsec">
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
      </div>
    </>
  );
};

export default Earphones;
