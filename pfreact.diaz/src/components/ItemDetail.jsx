import React, {useState, useContext} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({producto}) => {
    const [cart, setCart] = useState(false)
    const {agregarCarrito} = useContext(CartContext)

    const onAdd = (count) => {
        setCart(true)
        agregarCarrito(producto, count)
    }

    return (
        <div>
            <h1>{producto.nombre}</h1>
            <img src={producto.img} alt={producto.nombre} />
            <h3>{producto.precio}</h3>
            <h3>{producto.stock}</h3>
            <p>{producto.description}</p>

            {producto.stock === 0 ? (
                <h2>Sin Stock</h2>
            ) : (
                cart ? (
                    <Link to={'/cart'}>Ir al carrito</Link>
                ) : (
                    <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
                )
            )}
            
        </div>
    );
};

export default ItemDetail;
