import { HttpService } from "@nestjs/common";
import { Tenant_User_AppsDto } from "../../submodules/Portfolio-Platform-Dtos/tenant_user_appsDto";
import { Tenant_User_AppsEntity } from "../../submodules/Portfolio-Platform-Entities/tenant_user_appsEntity";
import AppService from "../../submodules/Portfolio-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class Tenant_User_AppsAppService extends AppService<Tenant_User_AppsEntity, Tenant_User_AppsDto> {
    private readonly tenant_user_appsRepository;
    http: HttpService;
    constructor(tenant_user_appsRepository: Repository<Tenant_User_AppsEntity>, http: HttpService);
}
