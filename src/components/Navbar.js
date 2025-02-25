import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get current route

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    if (location.pathname === "/") {
      setScrolled(window.scrollY > 50); // ✅ Check scroll position when returning to home
      window.addEventListener("scroll", handleScroll);
    } else {
      setScrolled(true); // ✅ Keep navbar solid on other pages
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]); // ✅ Trigger effect when route changes


  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${location.pathname === "/" ? "home-navbar" : ""}`}>
      <div className="nav-left">
        <Link to="/" onClick={(e) => { e.preventDefault(); /*Prevents default instant navigation*/ window.scrollTo({ top: 0, behavior: "smooth" }); 
          setTimeout(() => {
            window.location.href = "/"; // Redirects after scroll completes
          }, 500); // Adjust delay as needed
          }} className="logo">
            <img src="/PGP_WOODS_white_logo.png" alt="Wood Store Logo" className="logo-light" />
            <img src="/PGP_WOODS_black_logo.png" alt="Wood Store Logo" className="logo-dark" />
            {/* <img 
              src={scrolled ? "/PGP_WOODS_black_logo.png" : "/PGP_WOODS_white_logo.png"}
              alt="Wood Store Logo" 
            /> */}
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
