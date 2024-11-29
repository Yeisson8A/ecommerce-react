import React from 'react'
import { toCapital } from '../helpers/toCapital';
import Item from './Item';

// Se indica entre {} los parametros que va a recibir el componente
const ItemList = ({productos, titulo}) => {
  return (
    <div className="container">
        <h2 className="main-title">{toCapital(titulo)}</h2>

        <div className="productos">
            {/* Se usa map para recorrer el array y mostrar los datos cada registro */}
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList