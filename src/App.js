import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Screen/Home.js";
import ErrorPage from './Screen/ErrorPage.js';
import AboutUs from "./Screen/AboutUs.js";
import Contact from './Screen/Contact.js';
import Footer from "./Component/Footer.js";
import Header from './Component/Header.js';
import Portfolio from "./Screen/Portfolio.js";
import Index from "./Screen/Index.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Index" element={<Index />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
