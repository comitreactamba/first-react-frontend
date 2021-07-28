import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    { nombre: 'Monitor', precio: '53000', stock: 5 },
    { nombre: 'Teclado', precio: '12000', stock: 45 },
    { nombre: 'Mouse', precio: '8600', stock: 25 },
  ];

  const generarCards = () => {
    const cards = products.map((product) => {
      return (
        <ProductCard
          nombre={product.nombre}
          precio={product.precio}
          stock={product.stock}
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
