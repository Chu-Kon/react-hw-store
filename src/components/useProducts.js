import { useState, useEffect } from 'react';

const useProducts = (url) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    fetchData();
  }, [url]);

  return [products, setProducts];
};

export default useProducts;
