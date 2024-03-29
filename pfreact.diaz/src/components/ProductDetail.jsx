import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`URL_DEL_API/productos/${id}`);
        if (!response.ok) {
          throw new Error('Error al cargar los detalles del producto');
        }
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div>
      <h1>Detalles del Producto</h1>
      {producto ? <ItemDetail product={producto} /> : <p>Cargando detalles del producto...</p>}
    </div>
  );
}

export default ProductDetail;
