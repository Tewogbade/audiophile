import React from "react";
import "../headphones/Headphones.css";
import { Link } from "react-router-dom";

import headphonesMarkIIm from "../../images/headphones/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import headphonesMarkIIt from "../../images/headphones/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import headphonesMarkIId from "../../images/headphones/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import headphonesMarkIm from "../../images/headphones/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import headphonesMarkIt from "../../images/headphones/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import headphonesMarkId from "../../images/headphones/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import headphonesxx59m from "../../images/headphones/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import headphonesxx59t from "../../images/headphones/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import headphonesxx59d from "../../images/headphones/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import section2headphone from "../../images/home/shared/desktop/image-category-thumbnail-headphones.png";
import section2speaker from "../../images/home/shared/desktop/image-category-thumbnail-speakers.png";
import section2earphone from "../../images/home/shared/desktop/image-category-thumbnail-earphones.png";
import arrowright from "../../images/home/shared/desktop/icon-arrow-right.svg";

const Headphones = () => {
  return (
    <>
      <div className="header">
        <h4>Headphones</h4>
      </div>
      <div className="headphones">
        <div className="markII">
          <div className="headphonesimages">
            <img className="mobile" src={headphonesMarkIIm} alt="" />
            <img className="tablet" src={headphonesMarkIIt} alt="" />
            <img className="desktop" src={headphonesMarkIId} alt="" />
          </div>
          <div className="headphonestext">
            <h6>New product</h6>
            <h2>
              XX99 Mark II <br /> Headphones
            </h2>
            <p>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <Link to="/headphones/markii" className="btn">
              See product
            </Link>
          </div>
        </div>

        <div className="markI">
          <div className="headphonesimages">
            <img className="mobile" src={headphonesMarkIm} alt="" />
            <img className="tablet" src={headphonesMarkIt} alt="" />
            <img className="desktop" src={headphonesMarkId} alt="" />
          </div>
          <div className="headphonestext">
            <h6>New product</h6>
            <h2>
              XX99 Mark I <br /> Headphones
            </h2>
            <p>
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <Link to="/headphones/marki" className="btn">
              See product
            </Link>
          </div>
        </div>

        <div className="xx59">
          <div className="headphonesimages">
            <img className="mobile" src={headphonesxx59m} alt="" />
            <img className="tablet" src={headphonesxx59t} alt="" />
            <img className="desktop" src={headphonesxx59d} alt="" />
          </div>
          <div className="headphonestext">
            <h6>New product</h6>
            <h2>
              XX59 <br /> Headphones
            </h2>
            <p>
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <Link to="/headphones/xx59" className="btn">
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

export default Headphones;
