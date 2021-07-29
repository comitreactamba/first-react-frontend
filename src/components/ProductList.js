import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ productos }) => {
  const generarCards = () => {
    const cards = productos.map((producto) => {
      return (
        <ProductCard
          nombre={producto.nombre}
          precio={producto.precio}
          stock={producto.stock}
        />
      );
    });

    return cards;
  };

  return (
    <div>
      <h1>Listado de productos</h1>

      {generarCards()}
    </div>
  );
};

export default ProductList;
