import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { FaCartShopping } from 'react-icons/fa6';

const CartWidget = () => {
  // Leer estado y métodos globales del context
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/carrito">
            <FaCartShopping />
            {
              cantidadEnCarrito() > 0 && <span className="numerito">{cantidadEnCarrito()}</span>
            }
        </Link>
    </div>
  )
}

export default CartWidget