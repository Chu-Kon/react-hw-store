import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Product({product, buyProduct}) {
  const navigate = useNavigate()
  return (
    <div style={{width: '400px', height: '450px', border: 'solid black', margin: '5px'}}>
        <p>{product.title}</p>
        <p>{product.brand}</p>
        <p>{product.price}</p>
        <p>{product.discountPercentage}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>
        {/* <img src={product.thumbnail} width={200}></img> */}
        <img src={product.thumbnail || product.image} alt={product.title} style={{ maxWidth: '200px', maxHeight: '200px' }}></img>
        <button onClick={()=>buyProduct(product)}>Купить</button>
        <button onClick={() => navigate(`/product/${product.id}`)}>Подробнее</button>
        {/* <Link to={`/product/${product.id}`}>Подробнее</Link> */}
    </div>
  )
}
