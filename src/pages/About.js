import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <img src="/logo.jpg" alt="Wood Yard" className="hero-image" />
        <div className="overlay">
          <h1>About Us</h1>
          <p>Premium Wood Products for Every Need</p>
        </div>
      </div>

      <div className="about-content">
        <section className="intro">
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong>PGP Wood Store</strong>, your trusted source for high-quality, sustainable wood
            products. With years of experience in the industry, we provide **wood logs, sawdust,
            firewood, and wood chips** for both residential and industrial applications.
          </p>
        </section>

        <section className="mission-vision">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              Our mission is to deliver sustainable and premium wood products while ensuring responsible
              forestry practices. We aim to meet the highest quality standards, prioritizing both
              customer satisfaction and environmental responsibility.
            </p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To be a globally recognized leader in the wood supply industry, known for
              eco-friendly sourcing, innovation, and outstanding service.
            </p>
          </div>
        </section>

        <section className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>High-Quality Products:</strong> We offer only the best wood, sourced responsibly.</li>
            <li><strong>Eco-Friendly:</strong> Sustainability is at the heart of everything we do.</li>
            <li><strong>Reliable Supply:</strong> Consistent stock and timely delivery.</li>
            <li><strong>Customer-Centric:</strong> Your satisfaction is our priority.</li>
          </ul>
        </section>

        <section className="contact">
          <h2>Get in Touch</h2>
          <p>
            Have questions? Need a bulk order? We’re here to help!
          </p>
          <p>
            📧 Email: <a href="mailto:contact@woodstore.com">contact@woodstore.com</a>
          </p>
          <p>
            📞 Phone: +123 456 7890
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
