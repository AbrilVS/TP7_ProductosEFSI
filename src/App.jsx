// import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router"; 
import MainLayout from './layouts/MainLayout.jsx';

import './App.css'
import './styles/Home.css'
import './styles/Contacto.css'
import './styles/DetalleProd.css'
import DetalleProd from "./pages/DetalleProd.jsx";
import Home from "./pages/Home.jsx";
import QuienesSomos from "./pages/QuienesSomos.jsx";
import Contacto from "./pages/Contacto.jsx";
import Productos from "./pages/Productos.jsx";


function App() {



return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} >   
            <Route index element={<Home />} />    
            <Route path="/home" element={<Home/>} />
            <Route path="/productos" element={<Productos/>} />
            <Route path="/quienessomos" element={<QuienesSomos/>} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="/detalleProd" element={<DetalleProd/>} />
          </Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
