import { DtoBase } from "./DtoBase/dtobase";
export declare class Tenant_UsersDto extends DtoBase {
    constructor();
    tenant_id?: number;
    user_id?: number;
    identity_provider_subscriber_id?: string;
}
