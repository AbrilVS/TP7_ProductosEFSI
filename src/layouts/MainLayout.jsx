import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => {
    const categorias = [
  // Reemplaza estos ejemplos por las categorías reales
  { nombre: "Electrónica", path: "/productos/electronics" },
  { nombre: "Joyería", path: "/productos/jewelery" },
  { nombre: "Ropa de hombre", path: "/productos/men's clothing" },
  { nombre: "Ropa de mujer", path: "/productos/women's clothing" },
];
  return (
    <>
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/quienessomos">Quienes somos</Link>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                Productos
                </a>
                <ul className="dropdown-menu">
                <li>
                    <Link className="dropdown-item" to="/productos">Ver todos</Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                {categorias.map(cat => (
                    <li key={cat.nombre}>
                    <Link className="dropdown-item" to={cat.path}>{cat.nombre}</Link>
                    </li>
                ))}
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
        </ul>
        <Outlet />
        
    </>
  )
}

export default MainLayout
