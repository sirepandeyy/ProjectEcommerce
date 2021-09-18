import { User } from 'submodules/Ecommerce-Platform-Entities/users';
import { EntityBase } from "./EntityBase/entitybase";
export declare class Role extends EntityBase {
    name: string;
    Users: User[];
}
