import { DtoBase } from "./DtoBase/dtobase";
export declare class Tenant_User_AppsDto extends DtoBase {
    constructor();
    tenant_user_id?: number;
    tenant_app_id?: number;
    tenant_user_app_permissions?: string;
}
