import { EntityBase } from "./EntityBase/entitybase";
import { AppsEntity } from "./appsEntity";
import { Feature_PermissionsEntity } from "./feature_permissionsEntity";
import { Tenant_App_FeaturesEntity } from "./tenant_app_featuresEntity";
export declare class FeaturesEntity extends EntityBase {
    feature_id?: number;
    feature_name?: string;
    app_id?: number;
    base_feature_id?: number;
    feature_description?: string;
    feature_key?: string;
    operations?: string;
    feature_type?: number;
    apps: AppsEntity[];
    feature_permissions: Feature_PermissionsEntity[];
    tenant_app_features: Tenant_App_FeaturesEntity[];
}
