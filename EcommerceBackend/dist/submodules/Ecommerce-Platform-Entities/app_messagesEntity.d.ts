import { EntityBase } from "./EntityBase/entitybase";
import { AppsEntity } from "./appsEntity";
export declare class App_MessagesEntity extends EntityBase {
    user_id?: number;
    tenant_id?: number;
    apps: AppsEntity[];
    app_id?: number;
    is_notification?: boolean;
    subject?: string;
    message_body?: string;
    is_read?: boolean;
}
