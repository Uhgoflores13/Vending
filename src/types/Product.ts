export interface Product {
    id: number;
    name: string;
    preparationTime: number; 
  }
  
  export interface Order {
    id: number;
    product: Product;
    status: 'preparing' | 'dispatched';
    timeLeft: number;
  }
  