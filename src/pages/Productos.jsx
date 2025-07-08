import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { useParams } from 'react-router-dom';
import Buscador from '../components/Buscador';

function Productos() {
  const [productos, setProductos] = useState([]);
  const [search, setSearch] = useState('');
  const { category } = useParams();

  useEffect(() => {
    //llamar api
    if (!category) {
      axios.get('https://fakestoreapi.com/products').then(response => {
        setProductos(response.data);
      })
    }
    else {
      axios.get('https://fakestoreapi.com/products/category/' + category).then(response => {
        setProductos(response.data);
      })
    }
  }, [category])

  
  const productosFiltrados = productos.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    {/* buscador que filtra por titutlo, en tiempo real */}
      <Buscador value={search} onChange={setSearch} />
      <div className="cards-container">
        {productosFiltrados.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

export default Productos