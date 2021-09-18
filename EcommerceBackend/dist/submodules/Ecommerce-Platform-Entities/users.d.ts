import { EntityBase } from "./EntityBase/entitybase";
import { Role } from "./role";
import { Order } from "./order";
export declare class User extends EntityBase {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role_id: number;
    role: Role[];
    orders: Order[];
}
