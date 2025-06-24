import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Productos() {
const [productos,setProductos] = useState([]);
    useEffect(()=>{
        //llamar api
        axios.get('https://fakestoreapi.com/products').then(response=>{
            console.log(response)
            setProductos(response.data);
        })        
    },[])

  return (
    <>
    <div>Productos</div>

    {productos.map(item=>(
        <div key={item.id}>{item.description}</div>
    ))}
    </>
  )
  
}

export default Productos