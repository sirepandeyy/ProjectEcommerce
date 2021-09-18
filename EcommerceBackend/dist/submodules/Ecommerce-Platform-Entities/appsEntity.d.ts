import { EntityBase } from "./EntityBase/entitybase";
import { App_MessagesEntity } from "./app_messagesEntity";
import { App_RolesEntity } from "./app_rolesEntity";
import { FeaturesEntity } from "./featuresEntity";
import { Tenant_AppsEntity } from "./tenant_appsEntity";
export declare class AppsEntity extends EntityBase {
    app_name?: string;
    app_description?: string;
    app_message: App_MessagesEntity[];
    features: FeaturesEntity[];
    app_roles: App_RolesEntity[];
    tenant_apps: Tenant_AppsEntity[];
}
