import { DtoBase } from "./DtoBase/dtobase";
export declare class FeaturesDto extends DtoBase {
    constructor();
    feature_id?: number;
    feature_name?: string;
    app_id?: number;
    base_feature_id?: number;
    feature_description?: string;
    feature_key?: string;
    operations?: string;
    feature_type?: number;
}
