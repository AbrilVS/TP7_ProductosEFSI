import React, { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems, getTotal, clearCart, sumarCart, restarCart } = useContext(CarritoContext);

  const formatCurrency = (value) =>
    value.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

  const isEmpty = cartItems.length === 0;

  return (
    <section className="checkout-container">
      <h2 className="checkout-title">Resumen de compra</h2>

      {isEmpty ? (
        <div className="checkout-empty">
          <p>Tu carrito está vacío.</p>
          <Link className="btn custom-btn" to="/productos">Ir a productos</Link>
        </div>
      ) : (
        <div className="checkout-content">
          <div className="checkout-table">
            <div className="checkout-row checkout-row--head">
              <span>Producto</span>
              <span>Precio</span>
              <span>Cantidad</span>
              <span>Subtotal</span>
            </div>
            {cartItems.map((item) => (
              <div className="checkout-row" key={item.id}>
                <span className="co-title">{item.title}</span>
                <span>{formatCurrency(item.price)}</span>
                <span className="co-qty">
                  <button type="button" className="qty-btn" onClick={() => restarCart(item.id)} aria-label={`Restar 1 a ${item.title}`}>−</button>
                  <span className="qty-value">{item.cantidad}</span>
                  <button type="button" className="qty-btn" onClick={() => sumarCart(item.id)} aria-label={`Sumar 1 a ${item.title}`}>+</button>
                </span>
                <span className="co-subtotal">{formatCurrency(item.price * item.cantidad)}</span>
              </div>
            ))}
          </div>

          <div className="checkout-total">
            <span>Total</span>
            <span className="co-total-value">{formatCurrency(getTotal())}</span>
          </div>

          <div className="checkout-actions">
            <button className="btn custom-btn co-clear" onClick={clearCart}>Vaciar carrito</button>
            <Link className="btn custom-btn" to="/productos">Seguir comprando</Link>
            <button className="btn custom-btn co-pay" onClick={() => alert("Pago simulado jejeejeje")}>Pagar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Checkout;
