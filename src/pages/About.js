import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Modernized Hero Section */}
      <div className="hero-section">
        <h1 className="hero-heading">About us</h1>
        <h3 className="hero-sub-heading">Discover Premium Wood Products</h3>
        <p className="hero-subheading">Eco-friendly. High-quality. Reliable.</p>
      </div>

      <div className="about-content">
        {/* Who We Are Section */}
        <section className="intro">
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong>PGP Wood Store</strong>, your trusted source for high-quality, sustainable wood
            products. We provide wood logs, sawdust, firewood, and wood chips for homes and industries, with
            an unwavering commitment to sustainability and quality.
          </p>
        </section>

        {/* Our Services Section */}
        <section className="our-services">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <i className="icon fas fa-tree"></i>
              <h3>Wood Sourcing</h3>
              <p>Sustainably harvested premium wood for all your needs.</p>
            </div>
            <div className="service-item">
              <i className="icon fas fa-truck"></i>
              <h3>Fast Delivery</h3>
              <p>Reliable shipping to your location with hassle-free service.</p>
            </div>
            <div className="service-item">
              <i className="icon fas fa-cogs"></i>
              <h3>Custom Orders</h3>
              <p>Tailored wood products cut to your specifications.</p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="what-we-do">
          <h2>What We Do?</h2>
          <p>
            At PGP Wood Store, we specialize in high-quality wood products, including firewood, sawdust, and 
            construction-grade timber. Our team ensures excellent customer service and eco-friendly sourcing.
          </p>
        </section>

        {/* The Story Section */}
        <section className="the-story">
          <h2>Our Story</h2>
          <div className="story-timeline">
            <div className="timeline-item">
              <h3>The Beginning</h3>
              <p>
                Founded in 2005 as a family-run business, PGP Wood Store started with a small local supply of 
                firewood and sawdust.
              </p>
            </div>
            <div className="timeline-item">
              <h3>Today</h3>
              <p>
                Now, we are a recognized industry leader, delivering top-quality wood products across the region 
                while staying committed to sustainability.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <h2>Get in Touch</h2>
          <p>📧 Email: <a href="mailto:contact@woodstore.com">contact@woodstore.com</a></p>
          <p>📞 Phone: +123 456 7890</p>
        </section>
      </div>
    </div>
  );
};

export default About;
