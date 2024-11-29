import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';

const Carrito = () => {
  // Leer estado y métodos globales del context
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
      vaciarCarrito();
  }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>{prod.titulo}</h3>
                    <p>Precio unit: $<NumericFormat displayType="text" value={prod.precio} allowLeadingZeros thousandSeparator="," /></p>
                    <p>Precio total: $<NumericFormat displayType="text" value={prod.precio * prod.cantidad} allowLeadingZeros thousandSeparator="," /></p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: $<NumericFormat displayType="text" value={precioTotal()} allowLeadingZeros thousandSeparator="," /></h2>
                <div className='carrito'>
                    <button className='carrito-button' onClick={handleVaciar}>Vaciar</button>
                    <Link className='carrito-button' to="/checkout">Finalizar compra</Link>
                </div>
            </> :
            <h2>El carrito está vacío</h2>
        }
        
    </div>
  )
}

export default Carrito