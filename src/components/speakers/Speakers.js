import React from "react";
import "../speakers/Speakers.css";
import speakersZx9m from "../../images/speakers/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import speakersZx9t from "../../images/speakers/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import speakersZx9d from "../../images/speakers/product-zx9-speaker/desktop/image-category-page-preview.jpg";

import speakersZx7m from "../../images/speakers/product-zx7-speaker/mobile/image-category-page-preview.jpg";
import speakersZx7t from "../../images/speakers/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import speakersZx7d from "../../images/speakers/product-zx7-speaker/desktop/image-category-page-preview.jpg";

import section2headphone from "../../images/home/shared/desktop/image-category-thumbnail-speakers.png";
import section2speaker from "../../images/home/shared/desktop/image-category-thumbnail-speakers.png";
import section2earphone from "../../images/home/shared/desktop/image-category-thumbnail-earphones.png";
import arrowright from "../../images/home/shared/desktop/icon-arrow-right.svg";

const Speakers = () => {
  return (
    <div>
      <div className="header">
        <h4>speakers</h4>
      </div>
      <div className="speakers">
        <div className="Zx9">
          <div className="speakersimages">
            <img className="mobile" src={speakersZx9m} alt="" />
            <img className="tablet" src={speakersZx9t} alt="" />
            <img className="desktop" src={speakersZx9d} alt="" />
          </div>
          <div className="speakerstext">
            <h6>New product</h6>
            <h2>
              ZX9 <br /> speaker
            </h2>
            <p>
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <a href="#" className="btn">
              See product
            </a>
          </div>
        </div>

        <div className="Zx7">
          <div className="speakersimages">
            <img className="mobile" src={speakersZx7m} alt="" />
            <img className="tablet" src={speakersZx7t} alt="" />
            <img className="desktop" src={speakersZx7d} alt="" />
          </div>
          <div className="speakerstext">
            <h6>New product</h6>
            <h2>
              ZX7 <br /> speaker
            </h2>
            <p>
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </p>
            <a href="#" className="btn">
              See product
            </a>
          </div>
        </div>

        <div className="lastsec">
          <div className="pair">
            <img className="ximages" src={section2headphone} alt="" />
            <div className="greybox">
              <h6>speakers</h6>
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
      </div>
    </div>
  );
};

export default Speakers;
