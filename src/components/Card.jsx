import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item }) {
  return (
    <div className="custom-card card">
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-price">${item.price}</p>
        <button className="btn custom-btn">
          <Link to={`/detalleprod/${item.id}`}>Ver Más</Link>
        </button>
      </div>
    </div>
  );
}

export default Card;