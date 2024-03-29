import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)
    
    return (
        <div>
            <p>CARRITO</p>

            <p>{cantidadCarrito() == 0 ? null : cantidadCarrito()}</p>
       
    <div>
      <img src="cart-icon.png" alt="Carrito de Compras" />
      <span>{cartItems.length}</span> 
      </div>
    </div> 
    );
};

export default CartWidget;