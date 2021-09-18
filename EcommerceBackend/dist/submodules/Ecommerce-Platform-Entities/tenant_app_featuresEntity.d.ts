import { EntityBase } from "./EntityBase/entitybase";
import { FeaturesEntity } from "./featuresEntity";
import { Tenant_AppsEntity } from "./tenant_appsEntity";
export declare class Tenant_App_FeaturesEntity extends EntityBase {
    tenant_app_id?: number;
    feature_id?: number;
    features: FeaturesEntity[];
    tenant_apps: Tenant_AppsEntity[];
}
