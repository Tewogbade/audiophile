import React from "react";
import "../navbar/Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
// import navimage from "../../../images/home/desktop/audiophilelogo.svg";
import audiophilelogo from "../../../images/home/shared/desktop/audiophilelogo.png";

const Navbar = () => {
  const location = useLocation();
  const { pathname: exactLocation } = location;
  const checkLocation = exactLocation.split("/");
  console.log(checkLocation);
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
