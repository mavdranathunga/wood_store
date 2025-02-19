import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"; 
import ScrollToTopButton from "./components/ScrollToTopButton";
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <ScrollToTopButton />
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
