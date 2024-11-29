import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  // Manejo de estado para la variable item, para poder actualizarla
  const [item, setItem] = useState(null);
  // se usa useParams para acceder a los parametros enviados en la url
  const id = useParams().id;

  // UseEffect dispara la función que se encuentre en su interior únicamente cuando el componente se monta,
  // o bien cuando las variables que están en el array cambien su estado
  useEffect(() => {
    // Crear referencia a documento a consultar en firebase, indicando la colección y el id
    const docRef = doc(db, "productos", id);
    // Obtener un documento especifico de la colección en firebase
    getDoc(docRef).then((resp) => {
      setItem(
        { ...resp.data(), id: resp.id }
      );
    })
  }, [id])

  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer