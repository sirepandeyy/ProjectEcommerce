import { DtoBase } from "./DtoBase/dtobase";
export declare class App_MessagesDto extends DtoBase {
    constructor();
    user_id?: number;
    tenant_id?: number;
    app_id?: number;
    is_notification?: boolean;
    subject?: string;
    message_body?: string;
    is_read?: boolean;
}
