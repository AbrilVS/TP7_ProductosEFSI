
import { useContext, useState } from "react";
import { CarritoContext } from "../contexts/CarritoContext"; 


const CartWidget = () => {
  const { cartItems, removeFromCart, clearCart, getTotal } = useContext(CarritoContext);
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div className="cart-widget">
      <button className="cart-icon" onClick={() => setIsOpen(!isOpen)}>
        🛒 {totalItems}
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          <h4>Carrito</h4>

          {cartItems.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <>
              <ul className="cart-list">
                {cartItems.map((item) => (
                  <li key={item.id} className="cart-item">
                    <span>{item.title} x{item.cantidad}</span>
                    <span>${item.precio * item.cantidad}</span>
                    <button onClick={() => removeFromCart(item.id)}>❌</button>
                  </li>
                ))}
              </ul>

              <p className="cart-total">Total: ${getTotal()}</p>

              <button onClick={clearCart} className="clear-cart-btn">
                Vaciar carrito
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartWidget;
