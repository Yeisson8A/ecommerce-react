import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { toCapital } from '../helpers/toCapital'
import ItemCount from './ItemCount';
import { NumericFormat } from 'react-number-format';

const ItemDetail = ({item}) => {
  // Leer estado y métodos globales del context
  const { agregarAlCarrito } = useContext(CartContext);
  // Manejo de estado para la variable cantidad, para poder actualizarla
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
      cantidad < item.stock && setCantidad(cantidad + 1)
  }

  return (
    <div className="container">
        <div className="producto-detalle">
            <img src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className="titulo">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">Categoría: {toCapital(item.categoria)}</p>
                <p className="precio">$<NumericFormat displayType="text" value={item.precio} allowLeadingZeros thousandSeparator="," /></p>
                <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail