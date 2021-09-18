import { EntityBase } from "./EntityBase/entitybase";
import { Tenant_AppsEntity } from "./tenant_appsEntity";
import { Tenant_UsersEntity } from "./tenant_usersEntity";
import { Tenant_User_App_AlertsEntity } from "./tenant_user_app_alertsEntity";
import { Tenant_User_App_RolesEntity } from "./tenant_user_app_rolesEntity";
export declare class Tenant_User_AppsEntity extends EntityBase {
    tenant_user_id?: number;
    tenant_app_id?: number;
    tenant_user_app_permissions?: string;
    tenant_apps: Tenant_AppsEntity[];
    tenant_users: Tenant_UsersEntity[];
    tenant_user_app_alerts: Tenant_User_App_AlertsEntity[];
    tenant_user_app_roles: Tenant_User_App_RolesEntity[];
}
