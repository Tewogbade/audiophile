import React from "react";
import "../navbar/Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import navimage from "../../../images/home/desktop/audiophilelogo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  py-4" id="allnav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1>audiophile</h1>
            {/* <img src={navimage} alt=" audiophilelogo" /> */}
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
              <a className="nav-link " aria-current="page" href="#">
                HOME
              </a>
              <a className="nav-link" href="#">
                HEADPHONES
              </a>
              <a className="nav-link active" href="#">
                SPEAKERS
              </a>
              <a className="nav-link" href="#">
                EARPHONES
              </a>
            </div>
            <a href="#" className="carticon text-white">
              <AiOutlineShoppingCart />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
