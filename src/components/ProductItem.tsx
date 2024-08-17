import React from 'react';
import { Product } from '../types/Product';

interface Props {
  product: Product;
  onOrder: (product: Product) => void;
}


const ProductItem: React.FC<Props> = ({ product, onOrder }) => {
  const defaultImage = 'https://via.placeholder.com/150';
  return (

    <div className="bg-white shadow-md rounded-lg p-4 text-center ">
<img
  className="mx-auto w-32 h-32 object-cover rounded-md mb-4"
  src={product.thumbnail || defaultImage}
  alt={product.name}
  onError={(e) => {
    const target = e.target as HTMLImageElement;
    target.src = defaultImage;
  }}
/>      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">Tiempo de preparación: {product.preparation_time}s</p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={() => onOrder(product)}
      >
        Pedir
      </button>
    </div>
  );
};

export default ProductItem;
