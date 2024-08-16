import React from 'react';
import { Product } from '../types/Product';
import ProductItem from './ProductItem';

interface Props {
  products: Product[];
  onOrder: (product: Product) => void;
}

const ProductList: React.FC<Props> = ({ products, onOrder }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductItem key={product.id} product={product} onOrder={onOrder} />
      ))}
    </div>
  );
};

export default ProductList;
