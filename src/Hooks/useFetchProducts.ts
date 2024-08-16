import { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../types/Product';

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://products-api-ten.vercel.app/api')
      .then(response => {
        const adjustedProducts = response.data.map((product: Product) => ({
          ...product,
          preparationTime: 7, 
        }));
        setProducts(adjustedProducts);
        setLoading(false);
      })
      .catch(() => {
        setError('Error al cargar los productos');
        setLoading(false);
      });
  }, []);
  

  return { products, loading, error };
};

export default useFetchProducts;
