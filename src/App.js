import "./App.css";
import Navbar from "./components/homepage/navbar/Navbar";
import Home from "./components/homepage/home/Home";
import Footer from "./components/homepage/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
