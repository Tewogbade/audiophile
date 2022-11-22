import React, { useState } from "react";
import "../navbar/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import cartimage from "../../../images/home/shared/desktop/icon-cart.svg";
import audiophilelogo from "../../../images/home/shared/desktop/audiophilelogo.png";

const Navbar = ({ cartItems }) => {
  const location = useLocation();
  const { pathname: exactLocation } = location;
  const checkLocation = exactLocation.split("/");
  const removeAll = () => {
    cartItems.splice(0, 10);
  };

  const prices = [0];
  cartItems.map((item) => prices.push(item[2] * item[3]));
  const totalPrice = prices.reduce((total, amount) => total + amount);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  py-4" id="allnav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={audiophilelogo} alt=" audiophilelogo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <Link
                className={checkLocation[1] === "" ? "active" : ""}
                aria-current="page"
                to="/"
              >
                HOME
              </Link>
              <Link
                className={checkLocation[1] === "headphones" ? "active" : ""}
                to="/headphones"
              >
                HEADPHONES
              </Link>
              <Link
                className={checkLocation[1] === "speakers" ? "active" : ""}
                to="/speakers"
              >
                SPEAKERS
              </Link>
              <Link
                className={checkLocation[1] === "earphones" ? "active" : ""}
                to="/earphones"
              >
                EARPHONES
              </Link>
            </div>
            <div id="carttt">
              <Link to="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src={cartimage} alt="" />

                {cartItems.length >= 1 && (
                  <div className="itemsindicator">{cartItems.length}</div>
                )}
              </Link>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="modal-title fs-5" id="exampleModalLabel">
                      <h4>CART ({cartItems.length})</h4>
                    </div>
                    <button className="removeAll" onClick={removeAll}>
                      Remove all
                    </button>
                  </div>
                  <div className="modal-body">
                    <div>{cartItems.length === 0 && <p>Cart is Empty</p>}</div>
                    <ul>
                      {cartItems.map((cartItem) => (
                        <li key={cartItem}>
                          <img src={cartItem[0]} alt="" height={"50px"} />
                          <div className="maindiv">
                            <div className="namePrice">
                              <h5>{cartItem[1]}</h5>
                              <h6> ${cartItem[2]}</h6>
                            </div>
                            <h6>{cartItem[3]}</h6>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {cartItems.length >= 1 && (
                      <div className="total">
                        <h6>TOTAL</h6>
                        <h5>${totalPrice}</h5>
                      </div>
                    )}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn">
                      CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
