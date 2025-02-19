import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import an icon
import "../css/ScrollToTopButton.css"; // Import styles

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling
  };

  return (
    <button className={`scroll-to-top ${isVisible ? "show" : ""}`} onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTopButton;
