import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

export default () => {
  //let nombre = 'Pepe';
  const [nombre, setNombre] = useState('Pepe');
  const [apellido, setApellido] = useState('Ramirez');

  const [productos, setProductos] = useState([]);

  useEffect(getJson, []);

  function getJson() {
    const url = 'http://localhost:8000/products';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setProductos(data);
      })
      .catch(() => {
        console.log('Error');
      });
  }

  /*   async function getJson() {
    const url = 'http://localhost:8000/products';

    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  } */

  useEffect(() => {
    console.log('Soy el effect 2');
  });

  const cambiarNombre = () => {
    //nombre = 'Maria';
    setNombre('Maria');
    setApellido('Perez');

    console.log('Cambio el nombre', nombre);
  };

  return (
    <>
      {nombre}
      {apellido}
      <Navbar />
      <ProductList productos={productos} />
      <button onClick={cambiarNombre}>Cambiar nombre</button>
      {nombre}
    </>
  );
};
