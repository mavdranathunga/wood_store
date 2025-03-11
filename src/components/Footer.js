import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/PGP_WOODS_white_logo.png" alt="Wood Store Logo" />
          <p>Your trusted wood supplier for quality and sustainability.</p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: contact@woodstore.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Location: 123 Wood Street, GreenTown</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Wood Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
