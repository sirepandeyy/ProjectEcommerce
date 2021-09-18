import { EntityBase } from "./EntityBase/entitybase";
import { App_RolesEntity } from "./app_rolesEntity";
import { Feature_PermissionsEntity } from "./feature_permissionsEntity";
import { Tenant_User_App_RolesEntity } from "./tenant_user_app_rolesEntity";
export declare class RolesEntity extends EntityBase {
    role_name?: string;
    role_priviledge?: JSON;
    feature_permissions: Feature_PermissionsEntity[];
    app_roles: App_RolesEntity[];
    tenant_user_app_roles: Tenant_User_App_RolesEntity[];
}
