import React from 'react';
import logo from '../assets/logo.png';
const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="contacto-form-section">
        <h1 className="contacto-title">Let's talk</h1>
        <p className="contacto-description">
          To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly.
        </p>
        <form className="contacto-form">
          <label>
            Your Name
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Your Email
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Your Message
            <textarea rows={4} placeholder="Type something if you want..." />
          </label>
          <button className="button-secondary" type="submit">Send Message</button>
        </form>
      </div>
      <div className="contacto-info-section">
        <div className="contacto-illustration">
          <img className="hero-img" src={logo} alt="Productos destacados" />
        </div>
        <div className="contacto-info">
          <p>
            <span role="img" aria-label="location">📍</span> 151 New Park Ave, Hartford, CT 06106<br/>
            United States
          </p>
          <p>
            <span role="img" aria-label="phone">📞</span> +1 (203) 302-9545
          </p>
          <p>
            <span role="img" aria-label="email">✉️</span> contactus@inveritasoft.com
          </p>
        </div>
        <div className="contacto-social">
          <a href="#" className="social-icon facebook" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon twitter" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon instagram" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
