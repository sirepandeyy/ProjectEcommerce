import { HttpService } from "@nestjs/common";
import { Tenant_User_App_RolesDto } from "../../submodules/Portfolio-Platform-Dtos/tenant_user_app_rolesDto";
import { Tenant_User_App_RolesEntity } from "../../submodules/Portfolio-Platform-Entities/tenant_user_app_rolesEntity";
import AppService from "../../submodules/Portfolio-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class Tenant_User_App_RolesAppService extends AppService<Tenant_User_App_RolesEntity, Tenant_User_App_RolesDto> {
    private readonly tenant_user_app_rolesRepository;
    http: HttpService;
    constructor(tenant_user_app_rolesRepository: Repository<Tenant_User_App_RolesEntity>, http: HttpService);
}
