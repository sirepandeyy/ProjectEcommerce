import Tenant_User_AppsAppService from "../appservices/tenant_user_apps.appservice";
import { Tenant_User_AppsDto } from "../../submodules/Portfolio-Platform-Dtos/tenant_user_appsDto";
import { Tenant_User_AppsEntity } from "../../submodules/Portfolio-Platform-Entities/tenant_user_appsEntity";
import FacadeBase from "./facadebase";
export declare class Tenant_User_AppsFacade extends FacadeBase<Tenant_User_AppsEntity, Tenant_User_AppsDto> {
    private tenant_user_appsAppService;
    constructor(tenant_user_appsAppService: Tenant_User_AppsAppService);
}
