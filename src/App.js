import "./App.css";
import Home from "./components/homepage/home/Home";
import Headphones from "./components/headphones/Headphones";
import Speakers from "./components/speakers/Speakers";
import Earphones from "./components/earphones/Earphones";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MarkII from "./components/sub-categories/MarkII";
import MarkI from "./components/sub-categories/MarkI";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="headphones" element={<Headphones />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="earphones" element={<Earphones />} />
            <Route path="headphones/markii" element={<MarkII />} />
            <Route path="headphones/marki" element={<MarkI />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
