import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaPaperPlane } from "react-icons/fa";
import "../css/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!"); // Replace with backend API call
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <p><FaEnvelope className="icon" /> Email: <a href="mailto:info@woodstore.com">info@woodstore.com</a></p>
          <p><FaPhone className="icon" /> Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
          <p><FaMapMarkerAlt className="icon" /> Location: Wood Store Yard</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit">
            <FaPaperPlane className="button-icon" /> Send Message
          </button>
        </form>
      </div>

      <div className="map-container">
        <h2>Find Us Here</h2>
        <p>Visit our wood yard to explore premium wood chips, sawdust, and firewood.</p>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d35558.652392194424!2d80.30245506133316!3d7.021684593524251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDEnNDIuMCJOIDgwwrAxOCc0NS45IkU!5e0!3m2!1sen!2slk!4v1739969835384!5m2!1sen!2slk"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
}

export default Contact;
