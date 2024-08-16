import React from 'react';
import { Order } from '../types/Product';

interface Props {
  order: Order;
}

const OrderItem: React.FC<Props> = ({ order }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h4 className="font-semibold">{order.product.name}</h4>
      <p>Estado: {order.status === 'preparing' ? 'Preparando' : 'Despachado'}</p>
      <p>Tiempo restante: {order.timeLeft}s</p>
    </div>
  );
};

export default OrderItem;
