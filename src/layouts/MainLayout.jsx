// MainLayout.jsx
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import CartWidget from '../components/CartWidget';

const MainLayout = () => {
  const categorias = [
    { nombre: "Electrónica", path: "/productos/electronics" },
    { nombre: "Joyería", path: "/productos/jewelery" },
    { nombre: "Ropa de hombre", path: "/productos/men's clothing" },
    { nombre: "Ropa de mujer", path: "/productos/women's clothing" },
  ];

  return (
    <>
      <header className="app-header">
        <div className="app-bar">
          {/* Izquierda: carrito */}
          <div className="app-left">
            <CartWidget />
          </div>

          {/* Centro: navbar (no se superpone con nada) */}
          <nav className="app-center">
            <ul className="nav nav-pills app-nav">
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
                  <li><Link className="dropdown-item" to="/productos">Ver todos</Link></li>
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
          </nav>

          {/* Derecha: espacio/placeholder (por si después agregás buscador o user) */}
          <div className="app-right" />
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="minimal-footer">
        <span>&copy; 2025 Tienda Bonita · Hecho con <span className="heart">♥</span> en Argentina</span>
      </footer>
    </>
  )
}

export default MainLayout
