import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const stored = localStorage.getItem("cartItems");
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error("No se pudo leer cartItems desde localStorage:", error);
            return [];
        }
    });

    
    useEffect(() => {
        try {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        } catch (error) {
            console.error("No se pudo guardar cartItems en localStorage:", error);
        }
    }, [cartItems]);

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

    // Suma 1 unidad al producto indicado
    const sumarCart = (idProducto) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === idProducto
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            )
        );
    };

    // Resta 1 unidad; si llega a 0, elimina el producto
    const restarCart = (idProducto) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === idProducto
                        ? { ...item, cantidad: Math.max(0, item.cantidad - 1) }
                        : item
                )
                .filter((item) => item.cantidad > 0)
        );
    };
    
    return (
        <CarritoContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getTotal,
                sumarCart,
                restarCart
            }}
        >
            {children}
        </CarritoContext.Provider>
    );

    
    
};

export default CarritoProvider;
