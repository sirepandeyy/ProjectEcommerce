import App_RolesAppService from "../appservices/app_roles.appservice";
import { App_RolesDto } from "../../submodules/Portfolio-Platform-Dtos/app_rolesDto";
import { App_RolesEntity } from "../../submodules/Portfolio-Platform-Entities/app_rolesEntity";
import FacadeBase from "./facadebase";
export declare class App_RolesFacade extends FacadeBase<App_RolesEntity, App_RolesDto> {
    private app_rolesAppService;
    constructor(app_rolesAppService: App_RolesAppService);
}
