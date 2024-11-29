import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

const Checkout = () => {
  // Manejo de estado para la variable pedido id, para poder actualizarla
  const [pedidoId, setPedidoId] = useState("");
  // Leer estado y métodos globales del context
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  // Se usa el hook useForm para gestionar los campos del formulario
  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
      // Crear objeto pedido
      const pedido = {
          cliente: data,
          productos: carrito,
          total: precioTotal()
      }

      // Crear referencia a colección pedidos en firebase
      const pedidosRef = collection(db, "pedidos");

      // Crear documento en la colección en firebase
      addDoc(pedidosRef, pedido)
          .then((doc) => {
              // Actualizar variable pedido id con el id generado por firebase
              setPedidoId(doc.id);
              // Llamar método global para vaciar el carrito
              vaciarCarrito();
          })
  }

  // Validar si se tiene un pedido id para mostrar mensaje de confirmación
  if (pedidoId) {
      return (
          <div className="container">
              <h1 className="main-title">Muchas gracias por tu compra</h1>
              <p>Tu número de pedido es: {pedidoId}</p>
          </div>
      )
  }

  // En caso contrario mostrar formulario para confirmar pedido
  return (
    <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>
            <input type="text" placeholder="Ingresar nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresar e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresar teléfono" {...register("telefono")} />
            <button className="enviar" type="submit">Comprar</button>
        </form>
    </div>
  )
}

export default Checkout