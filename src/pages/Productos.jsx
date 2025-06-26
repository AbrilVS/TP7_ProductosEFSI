// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import Card from '../components/Card';


// function Productos() {
// const [productos,setProductos] = useState([]);
//     useEffect(()=>{
//         //llamar api
//         axios.get('https://fakestoreapi.com/products').then(response=>{
//             console.log(response)
//             setProductos(response.data);
//         })        
//     },[])

//   return (
//     <>
//       <h2>Productos</h2>
//       <div className="cards-container">
//         {productos.map(item => (
//           <Card key={item.id} item={item} />
//         ))}
//       </div>
//     </>
    
//   )
  
// }

// export default Productos