import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../contexts/CarritoContext';

function Card({ item }) {
  const { addToCart } = useContext(CarritoContext);
  return (
    <div className="custom-card card">
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-price">${item.price}</p>
        <div className="card-actions">
          <Link className="btn custom-btn" to={`/detalleprod/${item.id}`}>
            Ver Más
          </Link>
          <button
            className="btn custom-btn"
            onClick={() => addToCart({ ...item, cantidad: 1 })}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;