import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../sub-categories/Sub.css";

import markIIm from "../../images/speakers/product-zx9-speaker/mobile/image-product.jpg";
import markIIt from "../../images/speakers/product-zx9-speaker/tablet/image-product.jpg";
import markIId from "../../images/speakers/product-zx9-speaker/desktop/image-product.jpg";

import markIIgallery1m from "../../images/speakers/product-zx9-speaker/mobile/image-gallery-1.jpg";
import markIIgallery2m from "../../images/speakers/product-zx9-speaker/mobile/image-gallery-2.jpg";
import markIIgallery3m from "../../images/speakers/product-zx9-speaker/mobile/image-gallery-3.jpg";

import markIIgallery1t from "../../images/speakers/product-zx9-speaker/tablet/image-gallery-1.jpg";
import markIIgallery2t from "../../images/speakers/product-zx9-speaker/tablet/image-gallery-2.jpg";
import markIIgallery3t from "../../images/speakers/product-zx9-speaker/tablet/image-gallery-3.jpg";

import markIIgallery1d from "../../images/speakers/product-zx9-speaker/desktop/image-gallery-1.jpg";
import markIIgallery2d from "../../images/speakers/product-zx9-speaker/desktop/image-gallery-2.jpg";
import markIIgallery3d from "../../images/speakers/product-zx9-speaker/desktop/image-gallery-3.jpg";

import imagexx99m from "../../images/home/shared/mobile/image-xx99-mark-one-headphones.jpg";
import imagexx59m from "../../images/home/shared/mobile/image-xx59-headphones.jpg";
import imagezx7m from "../../images/home/shared/mobile/image-zx7-speaker.jpg";

import imagexx99t from "../../images/home/shared/tablet/image-xx99-mark-one-headphones.jpg";
import imagexx59t from "../../images/home/shared/tablet/image-xx59-headphones.jpg";
import imagezx7t from "../../images/home/shared/tablet/image-zx7-speaker.jpg";

import imagexx99d from "../../images/home/shared/desktop/image-xx99-mark-one-headphones.jpg";
import imagexx59d from "../../images/home/shared/desktop/image-xx59-headphones.jpg";
import imagezx7d from "../../images/home/shared/desktop/image-zx7-speaker.jpg";

import section2headphone from "../../images/home/shared/desktop/image-category-thumbnail-headphones.png";
import section2speaker from "../../images/home/shared/desktop/image-category-thumbnail-speakers.png";
import section2earphone from "../../images/home/shared/desktop/image-category-thumbnail-earphones.png";
import arrowright from "../../images/home/shared/desktop/icon-arrow-right.svg";

const Speaker1 = ({ info, cartItems }) => {
  const [count, setCount] = useState(1);
  const decrease = () => {
    setCount(count > 1 ? count - 1 : count);
  };
  const increase = () => {
    setCount(count + 1);
  };

  const goBack = () => {
    window.history.back();
  };

  const [data] = info;

  const addToCart = () => {
    cartItems.push([markIIm, data.name.slice(0, 3), data.price, count]);
  };
  return (
    <>
      <div className="subcat">
        <div className="gobackdiv">
          <Link className="goback" to="#" onClick={goBack}>
            Go back
          </Link>
        </div>
        <div className="section01">
          <div className="images">
            <img className="mobile" src={markIIm} alt="" />
            <img className="tablet" src={markIIt} alt="" />
            <img className="desktop" src={markIId} alt="" />
          </div>
          <div className="texts">
            <h6>New product</h6>
            <h2>
              ZX9 <br />
              Speaker
            </h2>
            <p>
              Upgrade your sound system with the all new ZX9 active speaker.
              It???s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <h5>$4,500</h5>
            <div className="addtocart">
              <div className="couter">
                <button onClick={decrease}>-</button>
                <p> {count}</p>
                <button onClick={increase}>+</button>
              </div>

              <Link to="#" className="btn" onClick={addToCart}>
                Add to cart
              </Link>
            </div>
          </div>
        </div>

        <div className="section02">
          <div className="features">
            <h3>Features</h3>
            <p>
              Connect via Bluetooth or nearly any wired source. This speaker
              features optical, digital coaxial, USB Type-B, stereo RCA, and
              stereo XLR inputs, allowing you to have up to five wired source
              devices connected for easy switching. Improved bluetooth
              technology offers near lossless audio quality at up to 328ft
              (100m).
            </p>
            <p>
              Discover clear, more natural sounding highs than the competition
              with ZX9???s signature planar diaphragm tweeter. Equally important
              is its powerful room-shaking bass courtesy of a 6.5??? aluminum
              alloy bass unit. You???ll be able to enjoy equal sound quality
              whether in a large room or small den. Furthermore, you will
              experience new sensations from old songs since it can respond to
              even the subtle waveforms.
            </p>
          </div>
          <div className="inTheBox">
            <h3>In the box</h3>
            <div>
              <p>
                <span>2x</span> Speaker Unit
              </p>
              <p>
                <span>2x</span>Speaker Cloth Panel
              </p>
              <p>
                <span>1x</span>User Manual
              </p>
              <p>
                <span>1x</span> 3.5mm 10m Audio Cable
              </p>
              <p>
                <span>1x</span>10m Optical Cable
              </p>
            </div>
          </div>
        </div>

        <div className="section03">
          <div className="mobile">
            <img className="gallery1" src={markIIgallery1m} alt="" />
            <img className="gallery2" src={markIIgallery2m} alt="" />
            <img className="gallery3" src={markIIgallery3m} alt="" />
          </div>
          <div className="tablet">
            <img className="gallery1" src={markIIgallery1t} alt="" />
            <img className="gallery3" src={markIIgallery3t} alt="" />
            <img className="gallery2" src={markIIgallery2t} alt="" />
          </div>
          <div className="desktop">
            <img className="gallery1" src={markIIgallery1d} alt="" />
            <img className="gallery3" src={markIIgallery3d} alt="" />
            <img className="gallery2" src={markIIgallery2d} alt="" />
          </div>
        </div>

        <div className="youMay">
          <h3>You may also like</h3>

          <div className="mobile">
            <div className="youMaySubcat">
              <img className="gallery1" src={imagezx7m} alt="" />
              <h2>ZX7 speaker</h2>
              <Link to="/speakers/zx7speaker" className="btn">
                See product
              </Link>
            </div>
            <div className="youMaySubcat">
              <img className="gallery1" src={imagexx99m} alt="" />
              <h2>XX99 Mark I</h2>
              <Link to="/headphones/marki" className="btn">
                See product
              </Link>
            </div>
            <div className="youMaySubcat">
              <img className="gallery1" src={imagexx59m} alt="" />
              <h2>XX59</h2>
              <Link to="/headphones/xx59" className="btn">
                See product
              </Link>
            </div>
          </div>
          <div className="tablet">
            <div className="youMaySubcat">
              <img className="gallery1" src={imagezx7t} alt="" />
              <h2>ZX7 speaker</h2>
              <Link to="/speakers/zx7speaker" className="btn">
                See product
              </Link>
            </div>
            <div className="youMaySubcat">
              <img className="gallery1" src={imagexx99t} alt="" />
              <h2>XX99 Mark I</h2>
              <Link to="/headphones/marki" className="btn">
                See product
              </Link>
            </div>
            <div className="youMaySubcat">
              <img className="gallery1" src={imagexx59t} alt="" />
              <h2>XX59</h2>
              <Link to="/headphones/xx59" className="btn">
                See product
              </Link>
            </div>
          </div>

          <div className="desktop">
            <div className="youMaySubcat">
              <img className="gallery1" src={imagezx7d} alt="" />
              <h2>ZX7 speaker</h2>
              <Link to="/speakers/zx7speaker" className="btn">
                See product
              </Link>
            </div>
            <div className="youMaySubcat">
              <img className="gallery1" src={imagexx99d} alt="" />
              <h2>XX99 Mark I</h2>
              <Link to="/headphones/marki" className="btn">
                See product
              </Link>
            </div>
            <div className="youMaySubcat">
              <img className="gallery1" src={imagexx59d} alt="" />
              <h2>XX59</h2>
              <Link to="/headphones/xx59" className="btn">
                See product
              </Link>
            </div>
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

export default Speaker1;
