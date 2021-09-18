import { HttpService } from "@nestjs/common";
import { TenantsDto } from "../../submodules/Portfolio-Platform-Dtos/tenantsDto";
import { TenantsEntity } from "../../submodules/Portfolio-Platform-Entities/tenantsEntity";
import AppService from "../../submodules/Portfolio-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class TenantsAppService extends AppService<TenantsEntity, TenantsDto> {
    private readonly tenantsRepository;
    http: HttpService;
    constructor(tenantsRepository: Repository<TenantsEntity>, http: HttpService);
}
