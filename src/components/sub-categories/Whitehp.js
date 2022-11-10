import React from "react";
import { Link } from "react-router-dom";
import "../sub-categories/Sub.css";

import markIIm from "../../images/headphones/product-xx59-headphones/mobile/image-product.jpg";
import markIIt from "../../images/headphones/product-xx59-headphones/tablet/image-product.jpg";
import markIId from "../../images/headphones/product-xx59-headphones/desktop/image-product.jpg";

import markIIgallery1m from "../../images/headphones/product-xx59-headphones/mobile/image-gallery-1.jpg";
import markIIgallery2m from "../../images/headphones/product-xx59-headphones/mobile/image-gallery-2.jpg";
import markIIgallery3m from "../../images/headphones/product-xx59-headphones/mobile/image-gallery-3.jpg";

import markIIgallery1t from "../../images/headphones/product-xx59-headphones/tablet/image-gallery-1.jpg";
import markIIgallery2t from "../../images/headphones/product-xx59-headphones/tablet/image-gallery-2.jpg";
import markIIgallery3t from "../../images/headphones/product-xx59-headphones/tablet/image-gallery-3.jpg";

import markIIgallery1d from "../../images/headphones/product-xx59-headphones/desktop/image-gallery-1.jpg";
import markIIgallery2d from "../../images/headphones/product-xx59-headphones/desktop/image-gallery-2.jpg";
import markIIgallery3d from "../../images/headphones/product-xx59-headphones/desktop/image-gallery-3.jpg";

import imagexx99m from "../../images/home/shared/mobile/image-xx99-mark-two-headphones.jpg";
import imagexx991m from "../../images/home/shared/mobile/image-xx99-mark-one-headphones.jpg";
import imagezx9m from "../../images/home/shared/mobile/image-zx9-speaker.jpg";

import imagexx99t from "../../images/home/shared/tablet/image-xx99-mark-two-headphones.jpg";
import imagexx991t from "../../images/home/shared/tablet/image-xx99-mark-one-headphones.jpg";
import imagezx9t from "../../images/home/shared/tablet/image-zx9-speaker.jpg";

import imagexx99d from "../../images/home/shared/desktop/image-xx99-mark-two-headphones.jpg";
import imagexx991d from "../../images/home/shared/desktop/image-xx99-mark-one-headphones.jpg";
import imagezx9d from "../../images/home/shared/desktop/image-zx9-speaker.jpg";

import section2headphone from "../../images/home/shared/desktop/image-category-thumbnail-headphones.png";
import section2speaker from "../../images/home/shared/desktop/image-category-thumbnail-speakers.png";
import section2earphone from "../../images/home/shared/desktop/image-category-thumbnail-earphones.png";
import arrowright from "../../images/home/shared/desktop/icon-arrow-right.svg";

const Whitehp = () => {
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
            <h6></h6>
            <h2>
              XX59 <br /> Headphones
            </h2>
            <p>
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <h5>$899</h5>
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
              These headphones have been created from durable, high-quality
              materials tough enough to take anywhere. Its compact folding
              design fuses comfort and minimalist style making it perfect for
              travel. Flawless transmission is assured by the latest wireless
              technology engineered for audio synchronization with videos.
            </p>
            <p>
              More than a simple pair of headphones, this headset features a
              pair of built-in microphones for clear, hands-free calling when
              paired with a compatible smartphone. Controlling music and calls
              is also intuitive thanks to easy-access touch buttons on the
              earcups. Regardless of how you use the XX59 headphones, you can do
              so all day thanks to an impressive 30-hour battery life that can
              be rapidly recharged via USB-C.
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
              <Link to="#" className="btn">
                See product
              </Link>
            </div>
            <div className="youMaySubcat">
              <img className="gallery1" src={imagexx991m} alt="" />
              <h2>XX99 Mark I</h2>
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
              <h2>XX99 Mark II</h2>
              <Link to="#" className="btn">
                See product
              </Link>
            </div>
            <div className="youMaySubcat">
              <img className="gallery1" src={imagexx991t} alt="" />
              <h2>XX99 Mark II</h2>
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
              <h2>XX99 Mark II</h2>
              <Link to="#" className="btn">
                See product
              </Link>
            </div>
            <div className="youMaySubcat">
              <img className="gallery1" src={imagexx991d} alt="" />
              <h2>XXX99 Mark I</h2>
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

export default Whitehp;
