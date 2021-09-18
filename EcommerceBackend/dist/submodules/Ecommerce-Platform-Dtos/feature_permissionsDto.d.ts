import { DtoBase } from "./DtoBase/dtobase";
export declare class Feature_PermissionsDto extends DtoBase {
    constructor();
    feature_id?: number;
    operation_permitted?: JSON;
    role_id?: number;
    user_id?: number;
    role_feature_security?: JSON;
}
