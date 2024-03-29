
import React, { useState } from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = () => {
  
  const [productos] = useState([
    { id: 1, nombre: 'Producto 1', img: 'img1.jpg' },
    { id: 2, nombre: 'Producto 2', img: 'img2.jpg' },
    { id: 3, nombre: 'Producto 3', img: 'img3.jpg' },
  ]);

  return (
    <div className="itemListContainer">
      {productos.map(producto => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;


