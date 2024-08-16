import React, { useState } from 'react';
import useFetchProducts from './Hooks/useFetchProducts';
import { Order, Product } from './types/Product';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';
import { Spinner,Button } from 'flowbite-react';


const App: React.FC = () => {
  const { products, loading, error } = useFetchProducts();
  const [orders, setOrders] = useState<Order[]>([]);

  const handleOrder = (product: Product) => {
    const fixedPreparationTime = 7; // Configura el tiempo de preparación fijo a 7 segundos
    const newOrder: Order = {
      id: Date.now(),
      product,
      status: 'preparing',
      timeLeft: fixedPreparationTime,
    };
    setOrders(prevOrders => [...prevOrders, newOrder]);

    const timer = setInterval(() => {
      setOrders(prevOrders => {
        return prevOrders.map(order => {
          if (order.id === newOrder.id) {
            if (order.timeLeft > 1) {
              return { ...order, timeLeft: order.timeLeft - 1 };
            } else {
              clearInterval(timer);
              return { ...order, status: 'dispatched', timeLeft: 0 };
            }
          }
          return order;
        });
      });
    }, 1000);
  };
  return (
  
    <div className="container mx-auto p-4">

        <h1 className="text-4xl text-center mb-8">Vending Machine</h1>
      {loading && (
        <div className="flex justify-center items-center">
          <Spinner size="lg" />
          <span className="ml-2">Cargando productos...</span>
        </div>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {!loading && !error && (
        <>
          <ProductList products={products} onOrder={handleOrder} />
          <OrderList orders={orders} />
        </>
      )}
    </div>
  );
};

export default App;
