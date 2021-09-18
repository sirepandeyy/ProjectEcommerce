import Tenant_User_App_AlertsAppService from "../appservices/tenant_user_app_alerts.appservice";
import { Tenant_User_App_AlertsDto } from "../../submodules/Portfolio-Platform-Dtos/tenant_user_app_alertsDto";
import { Tenant_User_App_AlertsEntity } from "../../submodules/Portfolio-Platform-Entities/tenant_user_app_alertsEntity";
import FacadeBase from "./facadebase";
export declare class Tenant_User_App_AlertsFacade extends FacadeBase<Tenant_User_App_AlertsEntity, Tenant_User_App_AlertsDto> {
    private tenant_user_app_alertsAppService;
    constructor(tenant_user_app_alertsAppService: Tenant_User_App_AlertsAppService);
}
