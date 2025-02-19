import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          <img src="/logo.jpg" alt="Wood Store Logo" />
        </Link>
      </div>

      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => {setMenuOpen(false); window.scrollTo(0, 0);}}>Home</Link>
        <Link to="/products" onClick={() => {setMenuOpen(false); window.scrollTo(0, 0);}}>Products</Link>
        <Link to="/about" onClick={() => {setMenuOpen(false); window.scrollTo(0, 0);}}>About Us</Link>
        <Link to="/contact" onClick={() => {setMenuOpen(false); window.scrollTo(0, 0);}}>Contact</Link>
      </div>

      {/* Menu Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
}

export default Navbar;
