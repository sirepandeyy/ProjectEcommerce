import { EntityBase } from "./EntityBase/entitybase";
import { Feature_PermissionsEntity } from "./feature_permissionsEntity";
import { Tenant_UsersEntity } from "./tenant_usersEntity";
export declare class UsersEntity extends EntityBase {
    login_name?: string;
    birth_date?: Date;
    date_of_joining?: Date;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: number;
    marital_status?: string;
    tenant_users: Tenant_UsersEntity[];
    feature_permissions: Feature_PermissionsEntity[];
}
