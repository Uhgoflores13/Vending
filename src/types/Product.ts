export interface Product {
    id: number;
    name: string;
    preparation_time: number; 
    thumbnail: string | null;
  }
  
  export interface Order {
    id: number;
    product: Product;
    status: 'preparing' | 'dispatched';
    timeLeft: number;
  }
  