import { createContext, useEffect, useState } from "react";

// Crear context
export const CartContext = createContext();

// Obtener carrito del localStorage, en caso de existir
const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {

    // Manejo de estado para la variable carrito, para poder actualizarla
    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const carritoExistente = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (carritoExistente) {
            carritoExistente.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        // Se usa la función setCarrito para actualizar la variable carrito
        setCarrito(nuevoCarrito);
    }

    const cantidadEnCarrito = () => {
        // Se usa reduce para calcular con base en la propiedad "Cantidad", la cantidad total de productos en el carrito
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        // Se usa reduce para calcular con base en las propiedades "Cantidad" y "Precio", el precio total del carrito
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        // Se usa la función setCarrito para actualizar la variable carrito
        setCarrito([]);
    }

    // UseEffect dispara la función que se encuentre en su interior únicamente cuando el componente se monta,
    // o bien cuando las variables que están en el array cambien su estado
    useEffect(() => {
        // Guardar carrito en el localStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])
    

    return (
        // Context para usar estados y métodos globales en la aplicación
        <CartContext.Provider value={ {
            carrito,
            agregarAlCarrito,
            cantidadEnCarrito,
            precioTotal,
            vaciarCarrito
        } }>
            {children}
        </CartContext.Provider>
    )
}