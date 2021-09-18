import { HttpService } from "@nestjs/common";
import { Tenant_AppsDto } from "../../submodules/Portfolio-Platform-Dtos/tenant_appsDto";
import { Tenant_AppsEntity } from "../../submodules/Portfolio-Platform-Entities/tenant_appsEntity";
import AppService from "../../submodules/Portfolio-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class Tenant_AppsAppService extends AppService<Tenant_AppsEntity, Tenant_AppsDto> {
    private readonly tenant_appsRepository;
    http: HttpService;
    constructor(tenant_appsRepository: Repository<Tenant_AppsEntity>, http: HttpService);
}
