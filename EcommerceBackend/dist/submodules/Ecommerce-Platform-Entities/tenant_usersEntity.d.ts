import { EntityBase } from "./EntityBase/entitybase";
import { TenantsEntity } from "./tenantsEntity";
import { Tenant_User_AppsEntity } from "./tenant_user_appsEntity";
import { UsersEntity } from "./usersEntity";
export declare class Tenant_UsersEntity extends EntityBase {
    tenant_id?: number;
    user_id?: number;
    identity_provider_subscriber_id?: string;
    users: UsersEntity[];
    tenants: TenantsEntity[];
    tenant_user_apps: Tenant_User_AppsEntity[];
}
