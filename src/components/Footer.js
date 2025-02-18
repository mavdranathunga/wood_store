// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css"; // Footer styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Wood Store. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="social-icons">
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
