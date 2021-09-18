import { EntityBase } from "./EntityBase/entitybase";
import { RolesEntity } from "./rolesEntity";
import { Tenant_User_AppsEntity } from "./tenant_user_appsEntity";
export declare class Tenant_User_App_RolesEntity extends EntityBase {
    tenant_user_app_id?: number;
    role_id?: number;
    roles: RolesEntity[];
    tenant_user_apps: Tenant_User_AppsEntity[];
}
