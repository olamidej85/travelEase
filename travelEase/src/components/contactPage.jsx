import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";


function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’re here to help you plan your perfect trip ✨</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Our Office</h2>
          <p><FaMapMarkerAlt /> 12 bash cresent, Lagos, Nigeria</p>
          <p><FaPhoneAlt /> +234 708 071 8756</p>
          <p><FaEnvelope /> support@travelease.com</p>
          <h3>Business Hours</h3>
          <p>Mon–Fri: 9:00 AM – 6:00 PM</p>
          <p>Sat: 10:00 AM – 4:00 PM</p>
          <p>Sun: Closed</p>

          <div className="social-links">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebook /></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
