import { HttpService } from "@nestjs/common";
import { Tenant_User_App_AlertsDto } from "../../submodules/Portfolio-Platform-Dtos/tenant_user_app_alertsDto";
import { Tenant_User_App_AlertsEntity } from "../../submodules/Portfolio-Platform-Entities/tenant_user_app_alertsEntity";
import AppService from "../../submodules/Portfolio-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class Tenant_User_App_AlertsAppService extends AppService<Tenant_User_App_AlertsEntity, Tenant_User_App_AlertsDto> {
    private readonly tenant_user_app_alertsRepository;
    http: HttpService;
    constructor(tenant_user_app_alertsRepository: Repository<Tenant_User_App_AlertsEntity>, http: HttpService);
}
