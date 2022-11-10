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
            <Route path="headphones/xx59" element={<Whitehp />} />
            <Route path="speakers/zx9speaker" element={<Speaker1 />} />
            <Route path="speakers/zx7speaker" element={<Speaker2 />} />
            <Route
              path="earphones/yx1wirelessearphone"
              element={<Earphone1 />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
