import { HttpService } from "@nestjs/common";
import { Tenant_App_FeaturesDto } from "../../submodules/Portfolio-Platform-Dtos/tenant_app_featuresDto";
import { Tenant_App_FeaturesEntity } from "../../submodules/Portfolio-Platform-Entities/tenant_app_featuresEntity";
import AppService from "../../submodules/Portfolio-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class Tenant_App_FeaturesAppService extends AppService<Tenant_App_FeaturesEntity, Tenant_App_FeaturesDto> {
    private readonly tenant_app_featuresRepository;
    http: HttpService;
    constructor(tenant_app_featuresRepository: Repository<Tenant_App_FeaturesEntity>, http: HttpService);
}
