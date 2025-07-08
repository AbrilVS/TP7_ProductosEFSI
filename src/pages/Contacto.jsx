import React from 'react';
import logo from '../assets/logo.png';
const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="contacto-form-section">
        <h1 className="contacto-title">¡Contactanos!</h1>
        <p className="contacto-description">
          Para organizar una reunión, rellena el siguiente formulario. 
        </p>
        <form className="contacto-form">
          <label>
            Tu Nombre
            <input type="text" placeholder="Ingrese su nombre" />
          </label>
          <label>
            Tu Correo Electrónico
            <input type="email" placeholder="Ingrese su email" />
          </label>
          <label>
            Tu Comentario
            <textarea rows={4} placeholder="Escribe lo que desees..." />
          </label>
          <button className="button-secondary" type="submit">Enviar</button>
        </form>
      </div>
      <div className="contacto-info-section">
        <div className="contacto-illustration">
          <img className="hero-img" src={logo} alt="Productos destacados" />
        </div>
        <div className="contacto-info">
          <p>
            <span role="img" aria-label="location">📍</span> ORT, Yatay 240, CABA, Argentina<br/>
          </p>
          <p>
            <span role="img" aria-label="phone">📞</span> +1 (203) 302-9545
          </p>
          <p>
            <span role="img" aria-label="email">✉️</span> contactus@gmail.com
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
