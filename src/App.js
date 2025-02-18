import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer"; // Import Footer
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <div className="nav-left">
            <Link to="/">
              <img src="/logo.jpg" alt="Wood Store Logo" className="logo" />
            </Link>
          </div>
          <div className="nav-right">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
