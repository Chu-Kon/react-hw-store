import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductDetails({ products }) {
  const navigate = useNavigate()
  const { id } = useParams();
  const product = products && products.find(product => product.id === parseInt(id, 10));

  return (
    <div>
        <h2>Подробная информация о товаре</h2>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <button onClick={()=>navigate(-1)}>Назад</button> 
        </div>
      )}
    </div>
  );
}
