import { EntityBase } from "./EntityBase/entitybase";
import { AppsEntity } from "./appsEntity";
import { RolesEntity } from "./rolesEntity";
export declare class App_RolesEntity extends EntityBase {
    role_id?: number;
    app_id?: number;
    app_role_permissions?: string;
    apps: AppsEntity[];
    roles: RolesEntity[];
}
