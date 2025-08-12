
import React, { useState, useContext } from 'react';
import { CarritoContext } from '../contexts/CarritoContext'; 

function DetalleCard({ product }) {
  const { addToCart } = useContext(CarritoContext); 
  const [cantidad, setCantidad] = useState(1); 

  const aumentar = () => setCantidad(cantidad + 1);
  const disminuir = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const handleComprar = () => {
    const productoConCantidad = {
      ...product,
      cantidad
    };
    addToCart(productoConCantidad);
    setCantidad(1); 
  };

  return product ? (
    <div className="detail-card card mb-3">
      <div className="row g-0 align-items-center">
        <div className="col-md-4 d-flex align-items-center justify-content-center card-img-box">
          <img
            src={product.image}
            className="img-fluid rounded-start detail-img"
            alt={product.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <h5 className="card-category">{product.category}</h5>
            <p className="card-description">{product.description}</p>
            <div className="price-box mb-3">
              <span className="price">${product.price}</span>
            </div>

            {/* Selector de cantidad */}
            <div className="d-flex align-items-center mb-3">
              <button className="btn btn-outline-secondary me-2" onClick={disminuir}>–</button>
              <span className="fs-5">{cantidad}</span>
              <button className="btn btn-outline-secondary ms-2" onClick={aumentar}>+</button>
            </div>

            {/* Botón Comprar */}
            <button className="btn btn-primary" onClick={handleComprar}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading....</div>
  );
}

export default DetalleCard;
