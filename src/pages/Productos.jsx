import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { useParams } from 'react-router-dom';


function Productos() {
const [productos,setProductos] = useState([]);
const { category } = useParams();

useEffect(()=>{
    //llamar api
    if (!category){
        axios.get('https://fakestoreapi.com/products').then(response=>{
            console.log(response)
            setProductos(response.data);
        })            
    }
    else{
        axios.get('https://fakestoreapi.com/products/category/'+category).then(response=>{
            console.log(response)
            setProductos(response.data);
        })  
    }    
},[category])   

  return (
    <>
      <h2>Productos</h2>
      <div className="cards-container">
        {productos.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
    
  )
  
}

export default Productos