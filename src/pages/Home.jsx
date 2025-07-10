import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <main className="home-main">
        <h1 className="logo">Product Store</h1>
      <section className="hero">
        <div className="hero-content">
          <h1>Descubrí lo mejor para vos</h1>
          <p>Productos seleccionados, marcas premium y envíos a todo el país.</p>
          <Link className="button-primary" to="/productos">Ver Productos</Link>
        </div>
        <img className="hero-img" src={logo} alt="Productos destacados" />
      </section>

      <section id="productos" className="products-preview">
        <h2>Productos Destacados</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" alt="Producto 1" />
            <h3>Aros de Oro Rosa</h3>
            <p>Ideal para verte mejor. Calidad premium.</p>
            <button className="button-secondary"><Link to={`/detalleprod/8`}>Ver Más</Link></button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="Producto 2" />
            <h3>Chaqueta de Algodón</h3>
            <p>Un clásico que nunca falla para este invierno, última moda. Stock limitado.</p>
            <button className="button-secondary"><Link to={`/detalleprod/3`}>Ver Más</Link></button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" alt="Producto 3" />
            <h3>Monitor 21 Pulgadas</h3>
            <p>Elegí lo mejor para vos, con un diseño increíble nuevo en el mercado.</p>
            <button className="button-secondary"><Link to={`/detalleprod/13`}>Ver Más</Link></button>
          </div>
        </div>
      </section>

      <section id="nosotros" className="about-section">
        <h2>Sobre nosotros</h2>
        <p>
          Somos una tienda con más de 10 años ofreciendo productos de calidad y atención personalizada.
          Nuestro compromiso es que cada cliente encuentre lo que busca y viva una experiencia única.
        </p>
      </section>

      
    </main>
  )
}

export default Home