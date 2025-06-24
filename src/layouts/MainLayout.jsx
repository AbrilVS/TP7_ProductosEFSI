import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/quienes-somos">Quienes somos</Link>
            <Link to="/contacto">Contacto</Link>
        </nav>
        <Outlet />
    </>
  )
}
