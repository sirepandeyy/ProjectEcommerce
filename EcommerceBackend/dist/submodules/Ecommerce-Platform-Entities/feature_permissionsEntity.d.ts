import { EntityBase } from "./EntityBase/entitybase";
import { FeaturesEntity } from "./featuresEntity";
import { RolesEntity } from "./rolesEntity";
import { UsersEntity } from "./usersEntity";
export declare class Feature_PermissionsEntity extends EntityBase {
    feature_id?: number;
    operation_permitted?: JSON;
    role_id?: number;
    user_id?: number;
    role_feature_security?: JSON;
    features: FeaturesEntity[];
    roles: RolesEntity[];
    users: UsersEntity[];
}
