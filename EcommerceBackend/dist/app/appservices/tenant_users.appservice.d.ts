import { HttpService } from "@nestjs/common";
import { Tenant_UsersDto } from "../../submodules/Portfolio-Platform-Dtos/tenant_usersDto";
import { Tenant_UsersEntity } from "../../submodules/Portfolio-Platform-Entities/tenant_usersEntity";
import AppService from "../../submodules/Portfolio-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class Tenant_UsersAppService extends AppService<Tenant_UsersEntity, Tenant_UsersDto> {
    private readonly tenant_usersRepository;
    http: HttpService;
    constructor(tenant_usersRepository: Repository<Tenant_UsersEntity>, http: HttpService);
}
