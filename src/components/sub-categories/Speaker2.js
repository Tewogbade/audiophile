import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../sub-categories/Sub.css";

import markIIm from "../../images/speakers/product-zx7-speaker/mobile/image-product.jpg";
import markIIt from "../../images/speakers/product-zx7-speaker/tablet/image-product.jpg";
import markIId from "../../images/speakers/product-zx7-speaker/desktop/image-product.jpg";

import markIIgallery1m from "../../images/speakers/product-zx7-speaker/mobile/image-gallery-1.jpg";
import markIIgallery2m from "../../images/speakers/product-zx7-speaker/mobile/image-gallery-2.jpg";
import markIIgallery3m from "../../images/speakers/product-zx7-speaker/mobile/image-gallery-3.jpg";

import markIIgallery1t from "../../images/speakers/product-zx7-speaker/tablet/image-gallery-1.jpg";
import markIIgallery2t from "../../images/speakers/product-zx7-speaker/tablet/image-gallery-2.jpg";
import markIIgallery3t from "../../images/speakers/product-zx7-speaker/tablet/image-gallery-3.jpg";

import markIIgallery1d from "../../images/speakers/product-zx7-speaker/desktop/image-gallery-1.jpg";
import markIIgallery2d from "../../images/speakers/product-zx7-speaker/desktop/image-gallery-2.jpg";
import markIIgallery3d from "../../images/speakers/product-zx7-speaker/desktop/image-gallery-3.jpg";

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

const Speaker2 = () => {
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
              ZX7 <br />
              Speaker
            </h2>
            <p>
              Stream high quality sound wirelessly with minimal to no loss. The
              ZX7 speaker uses high-end audiophile components that represents
              the top of the line powered speakers for home or studio use.
            </p>
            <h5>$3,500</h5>
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
              Reap the advantages of a flat diaphragm tweeter cone. This
              provides a fast response rate and excellent high frequencies that
              lower tiered bookshelf speakers cannot provide. The woofers are
              made from aluminum that produces a unique and clear sound. XLR
              inputs allow you to connect to a mixer for more advanced usage.
            </p>
            <p>
              The ZX7 speaker is the perfect blend of stylish design and high
              performance. It houses an encased MDF wooden enclosure which
              minimises acoustic resonance. Dual connectivity allows pairing
              through bluetooth or traditional optical and RCA input. Switch
              input sources and control volume at your finger tips with the
              included wireless remote. This versatile speaker is equipped to
              deliver an authentic listening experience.
            </p>
          </div>
          <div className="inTheBox">
            <h3>In the box</h3>
            <div>
              <p>
                <span>2x</span> Speaker Unit
              </p>
              <p>
                <span>2x</span>Speaker Cloth panel
              </p>
              <p>
                <span>1x</span>User Manual
              </p>
              <p>
                <span>1x</span> 3.5mm 7.5m Audio Cable
              </p>
              <p>
                <span>1x</span>7.5m Optical Cable
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
              <img className="gallery1" src={imagezx9m} alt="" />
              <h2>ZX9 speaker</h2>
              <Link to="/speakers/zx9speaker" className="btn">
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
              <img className="gallery1" src={imagezx9t} alt="" />
              <h2>ZX9 speaker</h2>
              <Link to="/speakers/zx9speaker" className="btn">
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
              <img className="gallery1" src={imagezx9d} alt="" />
              <h2>ZX9 speaker</h2>
              <Link to="/speakers/zx9speaker" className="btn">
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

export default Speaker2;
