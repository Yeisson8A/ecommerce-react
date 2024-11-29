import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from './ItemList';

const ItemListContainer = () => {
  // Manejo de estado para las variables productos y titulo, para poder actualizarlas
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  // se usa useParams para acceder a los parametros enviados en la url
  const categoria = useParams().categoria;

  // UseEffect dispara la función que se encuentre en su interior únicamente cuando el componente se monta,
  // o bien cuando las variables que están en el array cambien su estado
  useEffect(() => {
    // Obtener colección de firebase
    const productosRef = collection(db, "productos");
    // Filtrar en caso de recibir una categoría especifica en la url
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;
    // Asignar titulo según si se tiene una categoría o si se deben mostrar todos los productos
    categoria ? setTitulo(categoria) : setTitulo("Productos");

    // Obtener los documentos de la colección en firebase
    getDocs(q).then((resp) => {
      setProductos(
        // Se usa map para recorrer los registros obtenidos de firebase, y devolver una lista que contenga los campos y el id
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })
      )
    })
  }, [categoria])
    
  return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer