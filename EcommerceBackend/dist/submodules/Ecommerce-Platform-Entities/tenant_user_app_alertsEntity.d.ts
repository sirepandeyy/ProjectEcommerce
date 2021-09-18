import { EntityBase } from "./EntityBase/entitybase";
import { Tenant_User_AppsEntity } from "./tenant_user_appsEntity";
export declare class Tenant_User_App_AlertsEntity extends EntityBase {
    alert_type?: string;
    alert_name?: string;
    alert_desc?: string;
    from_date_time?: Date;
    alert_duration_type?: string;
    subscription_date?: Date;
    has_unsubscribed?: boolean;
    tenant_user_app_id?: number;
    tenant_user_id?: number;
    user_id?: number;
    tenant_user_apps: Tenant_User_AppsEntity[];
}
