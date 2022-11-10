import React from "react";
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

const Speaker1 = () => {
  return (
    <>
      <div className="subcat">
        <div className="gobackdiv">
          <Link className="goback" to="/headphones">
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
              XX99 Mark II <br /> Headphones
            </h2>
            <p>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <h5>$2,999</h5>
            <div className="addtocart">
              <div className="couter">
                <button>-</button>
                <p>1</p>
                <button>+</button>
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
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat.
            </p>
            <p>
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>
          </div>
          <div className="inTheBox">
            <h3>In the box</h3>
            <div>
              <p>
                <span>1x</span> Headphone unit
              </p>
              <p>
                <span>2x</span>Replacement earcups
              </p>
              <p>
                <span>1x</span>User manual
              </p>
              <p>
                <span>1x</span> 3.5mm 5m audio cable
              </p>
              <p>
                <span>1x</span>Travel bag
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
              <Link to="#" className="btn">
                See product
              </Link>
            </div>
            <div className="youMaySubcat">
              <img className="gallery1" src={imagexx59m} alt="" />
              <h2>XX59</h2>
              <Link to="#" className="btn">
                See product
              </Link>
            </div>
            <div className="youMaySubcat">
              <img className="gallery1" src={imagezx9m} alt="" />
              <h2>ZX9 speaker</h2>
              <Link to="#" className="btn">
                See product
              </Link>
            </div>
          </div>
          <div className="tablet">
            <div className="youMaySubcat">
              <img className="gallery1" src={imagexx99t} alt="" />
              <h2>XX99 Mark I</h2>
              <Link to="#" className="btn">
                See product
              </Link>
            </div>
            <div className="youMaySubcat">
              <img className="gallery1" src={imagexx59t} alt="" />
              <h2>XX59</h2>
              <Link to="#" className="btn">
                See product
              </Link>
            </div>
            <div className="youMaySubcat">
              <img className="gallery1" src={imagezx9t} alt="" />
              <h2>ZX9 speaker</h2>
              <Link to="#" className="btn">
                See product
              </Link>
            </div>
          </div>
          <div className="desktop">
            <div className="youMaySubcat">
              <img className="gallery1" src={imagexx99d} alt="" />
              <h2>XX99 Mark I</h2>
              <Link to="#" className="btn">
                See product
              </Link>
            </div>
            <div className="youMaySubcat">
              <img className="gallery1" src={imagexx59d} alt="" />
              <h2>XX59</h2>
              <Link to="#" className="btn">
                See product
              </Link>
            </div>
            <div className="youMaySubcat">
              <img className="gallery1" src={imagezx9d} alt="" />
              <h2>ZX9 speaker</h2>
              <Link to="#" className="btn">
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
