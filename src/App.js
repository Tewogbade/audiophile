import "./App.css";
import Home from "./components/homepage/home/Home";
import Headphones from "./components/headphones/Headphones";
import Speakers from "./components/speakers/Speakers";
import Earphones from "./components/earphones/Earphones";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MarkII from "./components/sub-categories/MarkII";
import MarkI from "./components/sub-categories/MarkI";
import Whitehp from "./components/sub-categories/Whitehp";
import Speaker1 from "./components/sub-categories/Speaker1";
import Speaker2 from "./components/sub-categories/Speaker2";
import Earphone1 from "./components/sub-categories/Earphone1";
import data from "./data.json";
import { useState } from "react";
import Cart from "./components/cart/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const markTwoData = data.filter(
    (datum) => datum.slug === "xx99-mark-two-headphones"
  );
  const markOneData = data.filter(
    (datum) => datum.slug === "xx99-mark-one-headphones"
  );
  const xx59Headphone = data.filter(
    (datum) => datum.slug === "xx59-headphones"
  );
  const zx7speaker = data.filter((datum) => datum.slug === "zx7-speaker");
  const zx9speaker = data.filter((datum) => datum.slug === "zx9-speaker");

  const yx1earphones = data.filter((datum) => datum.slug === "yx1-earphones");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Layout cartItems={cartItems} />}>
            <Route index element={<Home />} />
            <Route path="headphones" element={<Headphones />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="earphones" element={<Earphones />} />
            <Route
              path="headphones/markii"
              element={<MarkII info={markTwoData} cartItems={cartItems} />}
            />
            <Route
              path="headphones/marki"
              element={<MarkI info={markOneData} cartItems={cartItems} />}
            />
            <Route
              path="headphones/xx59"
              element={<Whitehp info={xx59Headphone} cartItems={cartItems} />}
            />
            <Route
              path="speakers/zx9speaker"
              element={<Speaker1 info={zx9speaker} cartItems={cartItems} />}
            />
            <Route
              path="speakers/zx7speaker"
              element={<Speaker2 info={zx7speaker} cartItems={cartItems} />}
            />
            <Route
              path="earphones/yx1wirelessearphone"
              element={<Earphone1 info={yx1earphones} cartItems={cartItems} />}
            />
          </Route>
          <Route path="cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
