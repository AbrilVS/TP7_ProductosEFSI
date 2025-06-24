// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router"; 
import MainLayout from './layouts/MainLayout.jsx';
import './App.css'
import './Home.css'
import './Contacto.css'
import './DetalleProd.css'
import { DetalleProd } from './pages/DetalleProd'


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />   
          <Route path="/home" element={<Home />} />    
          <Route path="/productos" element={<Productos/>} />
          <Route path="/aboutus" element={<QuienesSomos/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/detalleProd" element={<DetalleProd/>} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
