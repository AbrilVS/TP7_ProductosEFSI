// components/CartWidget.jsx
import { useContext, useEffect, useRef, useState } from "react";
import { CarritoContext } from "../contexts/CarritoContext";

const CartWidget = () => {
  const { cartItems, removeFromCart, clearCart, getTotal } = useContext(CarritoContext);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const totalItems = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

  // cerrar al click afuera
  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="cart-widget" ref={ref}>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setIsOpen(o => !o)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Abrir carrito"
      >
        🛒
        <span className="cart-badge">{totalItems}</span>
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          <div style={{ padding: "12px 14px" }}>
            <h6>Carrito</h6>

            {cartItems.length === 0 ? (
              <p className="read-the-docs">El carrito está vacío.</p>
            ) : (
              <>
                <ul className="cart-list">
                  {cartItems.map((item) => (
                    <li key={item.id} className="cart-item">
                      <span className="title">{item.title} ×{item.cantidad}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span>${item.price * item.cantidad}</span>
                        <button
                          className="btn btn-sm btn-link text-danger p-0"
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Quitar ${item.title}`}
                          title="Quitar"
                        >
                          ❌
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="cart-total">
                  <span>Total:</span>
                  <span>${getTotal()}</span>
                </div>

                <button onClick={clearCart} className="btn btn-danger w-100">
                  Vaciar carrito
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
