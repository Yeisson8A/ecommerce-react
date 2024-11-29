import React from 'react'
import { Link } from 'react-router-dom'
import { toCapital } from '../helpers/toCapital'
import { NumericFormat } from 'react-number-format';

// Se indica entre {} los parametros que va a recibir el componente
const Item = ({producto}) => {
  return (
    <div className="producto">
        <img src={producto.imagen} alt={producto.titulo} />
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio: $<NumericFormat displayType="text" value={producto.precio} allowLeadingZeros thousandSeparator="," /></p>
            <p>Categoría: {toCapital(producto.categoria)}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item