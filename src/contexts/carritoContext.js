import { createContext } from "react";

export const CarritoContext = createContext();

const CarritoProvider = (props)=>{
    const saludar = ()=>{
        console.log('hola')
    }
    

    return (
        <CarritoContext.Provider
            value ={{
                saludar
            }}
        >
            {props.children}
        </CarritoContext.Provider>
    );
}

export default CarritoProvider;