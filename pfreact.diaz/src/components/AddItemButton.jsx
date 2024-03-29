import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const AddItemButton = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const handleClick = () => {
    addItemToCart(product);
  };

  return (
    <button onClick={handleClick}>Añadir al carrito</button>
  );
}

export default AddItemButton;
