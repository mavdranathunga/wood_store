// src/pages/Home.js
import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css"; 

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image URLs for background
  const images = [
    "/images/background1.jpg",
    "/images/background2.jpg",
    "/images/background.webp",
    "/images/background3.jpg",
    "/images/background4.jpg"
    // Add more images as needed
  ];

  // Memoized function to change the next image
  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]); // Ensures the function doesn't change unnecessarily

  // Change the image every 10 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]); // Depend on the memoized function

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <h1>Welcome to PGP Wood Store!</h1>
        <p>High-quality wood products for all your needs.</p>
        <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
          <button className="explore-btn">Explore Products</button>
        </Link>
        
        {/* Image navigation arrows */}
        {/* <div className="image-nav">
          <span className="left-arrow" onClick={prevImage}>{"<"}</span>
          <span className="right-arrow" onClick={nextImage}>{">"}</span>
        </div> */}
      </section>


      {/* Featured Products */}
      <section className="featured">
        <h2>Our Premium Wood Selection</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="../images/background1.jpg" alt="Wood Logs"/>
            <h3>Wood Logs</h3>
            <p>Perfect for fireplace and industrial use.</p>
          </div>
          <div className="product-card">
            <img src="../images/background3.jpg" alt="Wood Chips"/>
            <h3>Wood Chips</h3>
            <p>Ideal for gardening and smoking meat.</p>
          </div>
          <div className="product-card">
            <img src="../images/background.webp" alt="Sawdust"/>
            <h3>Sawdust</h3>
            <p>Useful for animal bedding and composting.</p>
          </div>
          <div className="product-card">
            <img src="../images/background1.jpg" alt="Wood Logs"/>
            <h3>Wood Logs</h3>
            <p>Perfect for fireplace and industrial use.</p>
          </div>
          <div className="product-card">
            <img src="../images/background2.jpg" alt="Wood Chips"/>
            <h3>Wood Chips</h3>
            <p>Ideal for gardening and smoking meat.</p>
          </div>
          <div className="product-card">
            <img src="../images/background.webp" alt="Sawdust"/>
            <h3>Sawdust</h3>
            <p>Useful for animal bedding and composting.</p>
          </div>
        </div>
      </section>


      {/* Video-section */}
      <section className="video-section">
        <div className="content">
          <h2>See Our Products in Action</h2>
          <p>Take a look at our production process and see how we craft high-quality wood products for you!</p>
        </div>

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/Y8FH75XsI3s?si=WzO14wfV2iXbOnyE"
            title="Wood Products in Action"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="../images/gallery1.jpeg" alt="Lumber"/>
          <img src="../images/gallery2.webp" alt="Forest"/>
          <img src="../images/gallery3.jpg" alt="Firewood"/>
          <img src="../images/gallery4.jpg" alt="Woodcraft"/>
          <img src="../images/gallery5.avif" alt="Wood Pile"/>
          <img src="../images/gallery6.jpg" alt="Sawmill"/>
        </div>
      </section>
    </div>
  );
};

export default Home;
