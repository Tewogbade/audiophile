import React from "react";
import { Link } from "react-router-dom";
import "../sub-categories/Sub.css";

import markIIm from "../../images/headphones/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import markIIt from "../../images/headphones/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import markIId from "../../images/headphones/product-xx99-mark-two-headphones/desktop/image-product.jpg";

const MarkII = () => {
  return (
    <>
      <div className="subcat">
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
          <div className="section02">
            <div className="features">
              <h2>Features</h2>
              <p>
                Featuring a genuine leather head strap and premium earcups,
                these headphones deliver superior comfort for those who like to
                enjoy endless listening. It includes intuitive controls designed
                for any situation. Whether you’re taking a business call or just
                in your own personal space, the auto on/off and pause features
                ensure that you’ll never miss a beat.
              </p>
              <p>
                The advanced Active Noise Cancellation with built-in equalizer
                allow you to experience your audio world on your terms. It lets
                you enjoy your audio in peace, but quickly interact with your
                surroundings when you need to. Combined with Bluetooth 5. 0
                compliant connectivity and 17 hour battery life, the XX99 Mark
                II headphones gives you superior sound, cutting-edge technology,
                and a modern design aesthetic.
              </p>
            </div>
            <div className="inTheBox">
              <h2>In the box</h2>
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
      </div>
    </>
  );
};

export default MarkII;
