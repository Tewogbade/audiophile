import React, { useState } from "react";

import { Link } from "react-router-dom";
import "../sub-categories/Sub.css";

import markIIm from "../../images/headphones/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import markIIt from "../../images/headphones/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import markIId from "../../images/headphones/product-xx99-mark-one-headphones/desktop/image-product.jpg";

import markIIgallery1m from "../../images/headphones/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg";
import markIIgallery2m from "../../images/headphones/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg";
import markIIgallery3m from "../../images/headphones/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg";

import markIIgallery1t from "../../images/headphones/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg";
import markIIgallery2t from "../../images/headphones/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg";
import markIIgallery3t from "../../images/headphones/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg";

import markIIgallery1d from "../../images/headphones/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import markIIgallery2d from "../../images/headphones/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import markIIgallery3d from "../../images/headphones/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";

import imagexx99m from "../../images/home/shared/mobile/image-xx99-mark-two-headphones.jpg";
import imagexx59m from "../../images/home/shared/mobile/image-xx59-headphones.jpg";
import imagezx9m from "../../images/home/shared/mobile/image-zx9-speaker.jpg";

import imagexx99t from "../../images/home/shared/tablet/image-xx99-mark-two-headphones.jpg";
import imagexx59t from "../../images/home/shared/tablet/image-xx59-headphones.jpg";
import imagezx9t from "../../images/home/shared/tablet/image-zx9-speaker.jpg";

import imagexx99d from "../../images/home/shared/desktop/image-xx99-mark-two-headphones.jpg";
import imagexx59d from "../../images/home/shared/desktop/image-xx59-headphones.jpg";
import imagezx9d from "../../images/home/shared/desktop/image-zx9-speaker.jpg";

import section2headphone from "../../images/home/shared/desktop/image-category-thumbnail-headphones.png";
import section2speaker from "../../images/home/shared/desktop/image-category-thumbnail-speakers.png";
import section2earphone from "../../images/home/shared/desktop/image-category-thumbnail-earphones.png";
import arrowright from "../../images/home/shared/desktop/icon-arrow-right.svg";

const MarkI = ({ info, cartItems }) => {
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
    cartItems.push([markIIm, "XX99 MK I", data.price, count]);
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
            <h6></h6>
            <h2>
              XX99 Mark I <br /> Headphones
            </h2>
            <p>
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <h5>$1,750</h5>
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
              As the headphones all others are measured against, the XX99 Mark I
              demonstrates over five decades of audio expertise, redefining the
              critical listening experience. This pair of closed-back headphones
              are made of industrial, aerospace-grade materials to emphasize
              durability at a relatively light weight of 11 oz.
            </p>
            <p>
              From the handcrafted microfiber ear cushions to the robust metal
              headband with inner damping element, the components work together
              to deliver comfort and uncompromising sound. Its closed-back
              design delivers up to 27 dB of passive noise cancellation,
              reducing resonance by reflecting sound to a dedicated absorber.
              For connectivity, a specially tuned cable is included with a
              balanced gold connector.
            </p>
          </div>
          <div className="inTheBox">
            <h3>In the box</h3>
            <div>
              <p>
                <span>1x</span> Headphone Unit
              </p>
              <p>
                <span>2x</span>Replacement Earcups
              </p>
              <p>
                <span>1x</span>User Manual
              </p>
              <p>
                <span>1x</span> 3.5mm 5m Audio Cable
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
              <img className="gallery1" src={imagexx99m} alt="" />
              <h2>XX99 Mark II</h2>
              <Link to="/headphones/markii" className="btn">
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
            <div className="youMaySubcat">
              <img className="gallery1" src={imagezx9m} alt="" />
              <h2>ZX9 speaker</h2>
              <Link to="/speakers/zx9speaker" className="btn">
                See product
              </Link>
            </div>
          </div>
          <div className="tablet">
            <div className="youMaySubcat">
              <img className="gallery1" src={imagexx99t} alt="" />
              <h2>XX99 Mark II</h2>
              <Link to="/headphones/markii" className="btn">
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
            <div className="youMaySubcat">
              <img className="gallery1" src={imagezx9t} alt="" />
              <h2>ZX9 speaker</h2>
              <Link to="/speakers/zx9speaker" className="btn">
                See product
              </Link>
            </div>
          </div>
          <div className="desktop">
            <div className="youMaySubcat">
              <img className="gallery1" src={imagexx99d} alt="" />
              <h2>XX99 Mark II</h2>
              <Link to="/headphones/markii" className="btn">
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
            <div className="youMaySubcat">
              <img className="gallery1" src={imagezx9d} alt="" />
              <h2>ZX9 speaker</h2>
              <Link to="/speakers/zx9speaker" className="btn">
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

export default MarkI;
