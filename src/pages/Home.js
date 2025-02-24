// src/pages/Home.js
import React from "react";
import "../css/Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to PGP Wood Store</h1>
        <p>High-quality wood products for all your needs.</p>
        <button className="explore-btn">Explore Products</button>
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
