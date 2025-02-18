// src/pages/Home.js
import React from "react";
import "../css/Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to PGP - Wood Store</h1>
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
            <img src="https://source.unsplash.com/300x200/?wood,chips" alt="Wood Chips"/>
            <h3>Wood Chips</h3>
            <p>Ideal for gardening and smoking meat.</p>
          </div>
          <div className="product-card">
            <img src="https://source.unsplash.com/300x200/?wood,sawdust" alt="Sawdust"/>
            <h3>Sawdust</h3>
            <p>Useful for animal bedding and composting.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="../images/background1.jpg" alt="Lumber"/>
          <img src="https://source.unsplash.com/300x200/?forest" alt="Forest"/>
          <img src="https://source.unsplash.com/300x200/?firewood" alt="Firewood"/>
          <img src="https://source.unsplash.com/300x200/?woodcraft" alt="Woodcraft"/>
          <img src="https://source.unsplash.com/300x200/?woodpile" alt="Wood Pile"/>
          <img src="https://source.unsplash.com/300x200/?sawmill" alt="Sawmill"/>
        </div>
      </section>
    </div>
  );
};

export default Home;
