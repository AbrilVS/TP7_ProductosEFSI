
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../contexts/CarritoContext";

const CartWidget = () => {
  const { cartItems, removeFromCart, clearCart, getTotal, sumarCart, restarCart } = useContext(CarritoContext);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const totalItems = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

  
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
                      <span className="title">{item.title}</span>
                      <div className="cart-actions">
                        <button
                          type="button"
                          className="qty-btn qty-btn--minus"
                          onClick={() => restarCart(item.id)}
                          aria-label={`Restar 1 a ${item.title}`}
                          title="-1"
                        >
                          −
                        </button>
                        <span className="qty-value" aria-label={`Cantidad de ${item.title}`}>{item.cantidad}</span>
                        <button
                          type="button"
                          className="qty-btn qty-btn--plus"
                          onClick={() => sumarCart(item.id)}
                      
                          
                        >
                          +
                        </button>
                        <span>
                          {(item.price * item.cantidad).toLocaleString("es-AR", { style: "currency", currency: "ARS" })}
                        </span>
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
                  <span>
                    {getTotal().toLocaleString("es-AR", { style: "currency", currency: "ARS" })}
                  </span>
                </div>

                <button onClick={clearCart} className="btn btn-danger w-100">
                  Vaciar carrito
                </button>
                <Link to="/checkout" className="btn custom-btn w-100" style={{ marginTop: 8 }}>
                  Ir al checkout
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
