import { DtoBase } from "./DtoBase/dtobase";
export declare class Tenant_AppsDto extends DtoBase {
    constructor();
    tenant_id?: number;
    app_id?: number;
    connection_string?: string;
    all_features: boolean;
}
