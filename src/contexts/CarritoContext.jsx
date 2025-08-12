import { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (producto ) => {
        setCartItems((prevItems) => {
            const itemExistente = prevItems.find(item => item.id === producto.id);
            if (itemExistente) {
                return prevItems.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad+ producto.cantidad }
                        : item
                );
            } else {
                return [...prevItems, { ...producto, cantidad: producto.cantidad }];
            }
        });
    };

    const removeFromCart = (idProducto) => {
        setCartItems((prevItems) =>
            prevItems.filter(item => item.id !== idProducto)
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.cantidad, 0);
    };

    return (
        <CarritoContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getTotal
            }}
        >
            {children}
        </CarritoContext.Provider>
    );
};

export default CarritoProvider;
