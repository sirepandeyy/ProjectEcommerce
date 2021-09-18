import { EntityBase } from "./EntityBase/entitybase";
import { ClientsEntity } from "./clientsEntity";
import { Tenant_AppsEntity } from "./tenant_appsEntity";
import { Tenant_UsersEntity } from "./tenant_usersEntity";
export declare class TenantsEntity extends EntityBase {
    tenant_name?: string;
    description?: string;
    alias?: string;
    published_from?: Date;
    published_till?: Date;
    is_complete?: boolean;
    site_image_url_path?: string;
    status_id?: number;
    client_Id?: number;
    identity_providers_details?: JSON;
    tenant_admin_email?: string;
    tenant_users: Tenant_UsersEntity[];
    tenant_apps: Tenant_AppsEntity[];
    clients: ClientsEntity;
}
