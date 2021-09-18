import { DtoBase } from "./DtoBase/dtobase";
export declare class ClientsDto extends DtoBase {
    constructor();
    address_id?: number;
    start_date?: Date;
    expiry_date?: Date;
    client_key?: string;
    client_name?: string;
    description?: string;
    contact_id?: number;
}
