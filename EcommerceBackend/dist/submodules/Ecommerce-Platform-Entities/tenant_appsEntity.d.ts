import { EntityBase } from "./EntityBase/entitybase";
import { AppsEntity } from "./appsEntity";
import { TenantsEntity } from "./tenantsEntity";
import { Tenant_App_FeaturesEntity } from "./tenant_app_featuresEntity";
import { Tenant_User_AppsEntity } from "./tenant_user_appsEntity";
export declare class Tenant_AppsEntity extends EntityBase {
    tenant_id?: number;
    app_id?: number;
    connection_string?: string;
    all_features: boolean;
    apps: AppsEntity[];
    tenants: TenantsEntity[];
    tenant_app_features: Tenant_App_FeaturesEntity[];
    tenant_user_apps: Tenant_User_AppsEntity[];
}
