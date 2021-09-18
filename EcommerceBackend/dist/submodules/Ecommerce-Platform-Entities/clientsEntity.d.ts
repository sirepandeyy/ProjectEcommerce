import { EntityBase } from "./EntityBase/entitybase";
import { TenantsEntity } from "./tenantsEntity";
export declare class ClientsEntity extends EntityBase {
    address_id?: number;
    start_date?: Date;
    expiry_date?: Date;
    client_key?: string;
    client_name?: string;
    description?: string;
    contact_id?: number;
    tenants: TenantsEntity[];
}
