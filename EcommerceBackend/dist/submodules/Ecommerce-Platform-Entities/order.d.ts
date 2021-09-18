import { EntityBase } from './EntityBase/entitybase';
import { OrderItem } from "./order-item";
import { User } from './users';
import { Link } from './link';
export declare class Order extends EntityBase {
    name: string;
    email: string;
    user_id: number;
    order_items: OrderItem[];
    user: User;
    link: Link;
}
