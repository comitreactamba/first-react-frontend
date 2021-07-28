import React from 'react';

export default function ProductCard({ nombre, precio, stock }) {
  return (
    <ul>
      <li>{nombre}</li>
      <li>{precio}</li>
      <li>{stock}</li>
    </ul>
  );
}
