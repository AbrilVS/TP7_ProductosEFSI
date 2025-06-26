import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetalleCard from '../components/DetalleCard';

const DetalleProd = () => {
  // const { id } = useParams();
  // const [prod, setProd] = useState(null);

  // useEffect(() => {
  //   axios.get(`https://fakestoreapi.com/products/${id}`).then(response => {
  //     setProd(response.data);
  //   });
  // }, [id]);

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '2rem', color: '#009688' }}>Detalle del Producto</h2>
      <DetalleCard product={prod} />
    </div>
  )
}

export default DetalleProd