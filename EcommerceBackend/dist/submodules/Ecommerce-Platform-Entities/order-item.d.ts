import { EntityBase } from './EntityBase/entitybase';
import { Order } from "./order";
export declare class OrderItem extends EntityBase {
    product_title: string;
    price: number;
    quantity: number;
    order_id: number;
    order: Order;
}
