import React from 'react'

function DetalleCard({product}) {    
  return (product  ?    
    (
    <div className="detail-card card mb-3">
      <div className="row g-0 align-items-center">
        <div className="col-md-4 d-flex align-items-center justify-content-center card-img-box">
          <img src={product.image} className="img-fluid rounded-start detail-img" alt={product.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <h5 className="card-category">{product.category}</h5>
            <p className="card-description">{product.description}</p>
            <div className="price-box">
              <span className="price">${product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading....</div>
  ))
}

export default DetalleCard