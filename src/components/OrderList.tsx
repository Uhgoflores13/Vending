import React from 'react';
import { Order } from '../types/Product';
import OrderItem from './OrderItem';

interface Props {
  orders: Order[];
}

const OrderList: React.FC<Props> = ({ orders }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Órdenes</h2>
      <div className="grid grid-cols-1 gap-4">
        {orders.map(order => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderList;
