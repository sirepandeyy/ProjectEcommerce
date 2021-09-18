import {OrderItem} from './order-item';

export interface Order {
  Id: number;
  name: string;
  email: string;
  order_items: OrderItem[];
}
