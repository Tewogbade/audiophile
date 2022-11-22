import React from "react";
import Navbar from "./components/homepage/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/homepage/footer/Footer";

const Layout = ({ cartItems }) => {
  return (
    <div>
      <Navbar cartItems={cartItems} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
