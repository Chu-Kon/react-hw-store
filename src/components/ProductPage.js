import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        getData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <p>ID: {product.id}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Discount Percentage: {product.discountPercentage}</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <img src={product.thumbnail} alt={product.title} />
            <button onClick={()=>navigate(-1)}>Назад</button>
        </div>
    );
}

