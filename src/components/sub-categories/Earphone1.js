import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../sub-categories/Sub.css";

import markIIm from "../../images/earphones/product-yx1-earphones/mobile/image-product.jpg";
import markIIt from "../../images/earphones/product-yx1-earphones/tablet/image-product.jpg";
import markIId from "../../images/earphones/product-yx1-earphones/desktop/image-product.jpg";

import markIIgallery1m from "../../images/earphones/product-yx1-earphones/mobile/image-gallery-1.jpg";
import markIIgallery2m from "../../images/earphones/product-yx1-earphones/mobile/image-gallery-2.jpg";
import markIIgallery3m from "../../images/earphones/product-yx1-earphones/mobile/image-gallery-3.jpg";

import markIIgallery1t from "../../images/earphones/product-yx1-earphones/tablet/image-gallery-1.jpg";
import markIIgallery2t from "../../images/earphones/product-yx1-earphones/tablet/image-gallery-2.jpg";
import markIIgallery3t from "../../images/earphones/product-yx1-earphones/tablet/image-gallery-3.jpg";

import markIIgallery1d from "../../images/earphones/product-yx1-earphones/desktop/image-gallery-1.jpg";
import markIIgallery2d from "../../images/earphones/product-yx1-earphones/desktop/image-gallery-2.jpg";
import markIIgallery3d from "../../images/earphones/product-yx1-earphones/desktop/image-gallery-3.jpg";

import imagexx99m from "../../images/home/shared/mobile/image-xx99-mark-one-headphones.jpg";
import imagexx59m from "../../images/home/shared/mobile/image-xx59-headphones.jpg";
import imagezx9m from "../../images/home/shared/mobile/image-zx9-speaker.jpg";

import imagexx99t from "../../images/home/shared/tablet/image-xx99-mark-one-headphones.jpg";
import imagexx59t from "../../images/home/shared/tablet/image-xx59-headphones.jpg";
import imagezx9t from "../../images/home/shared/tablet/image-zx9-speaker.jpg";

import imagexx99d from "../../images/home/shared/desktop/image-xx99-mark-one-headphones.jpg";
import imagexx59d from "../../images/home/shared/desktop/image-xx59-headphones.jpg";
import imagezx9d from "../../images/home/shared/desktop/image-zx9-speaker.jpg";

import section2headphone from "../../images/home/shared/desktop/image-category-thumbnail-headphones.png";
import section2speaker from "../../images/home/shared/desktop/image-category-thumbnail-speakers.png";
import section2earphone from "../../images/home/shared/desktop/image-category-thumbnail-earphones.png";
import arrowright from "../../images/home/shared/desktop/icon-arrow-right.svg";

const Earphone1 = () => {
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
  // const earphone1cart = ["YX1 Wireless", markIIm, count];
  // console.log(earphone1cart);

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
              YX1 Wireless <br />
              Earphones
            </h2>
            <p>
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <h5>$599</h5>
            <div className="addtocart">
              <div className="couter">
                <button onClick={decrease}>-</button>
                <p> {count}</p>
                <button onClick={increase}>+</button>
              </div>

              <Link to="#" className="btn">
                Add to cart
              </Link>
            </div>
          </div>
        </div>

        <div className="section02">
          <div className="features">
            <h3>Features</h3>
            <p>
              Experience unrivalled stereo sound thanks to innovative acoustic
              technology. With improved ergonomics designed for full day
              wearing, these revolutionary earphones have been finely crafted to
              provide you with the perfect fit, delivering complete comfort all
              day long while enjoying exceptional noise isolation and truly
              immersive sound.
            </p>
            <p>
              The YX1 Wireless Earphones features customizable controls for
              volume, music, calls, and voice assistants built into both
              earbuds. The new 7-hour battery life can be extended up to 28
              hours with the charging case, giving you uninterrupted play time.
              Exquisite craftsmanship with a splash resistant design now
              available in an all new white and grey color scheme as well as the
              popular classic black.
            </p>
          </div>
          <div className="inTheBox">
            <h3>In the box</h3>
            <div>
              <p>
                <span>2x</span> Earphone Unit
              </p>
              <p>
                <span>6x</span>Multi-size Earplugs
              </p>
              <p>
                <span>1x</span>User Manual
              </p>
              <p>
                <span>1x</span> USB-C Charging Cable
              </p>
              <p>
                <span>1x</span>Travel Pouch
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

export default Earphone1;
