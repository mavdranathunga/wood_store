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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509588!2d144.95373531531713!3d-37.816279742021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMjMuNzgxOTExLCBMYXRpdHVkZQ!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
}

export default Contact;
