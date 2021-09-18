import { EntityBase } from './EntityBase/entitybase';
import { Order } from "./order";
import { Product } from "./product";
import { User } from "./users";
export declare class Link extends EntityBase {
    code: string;
    user_id: number;
    user: User;
    product_id: number[];
    products: Product[];
    orders: Order[];
}
