import { HttpService } from "@nestjs/common";
import { App_RolesDto } from "../../submodules/Portfolio-Platform-Dtos/app_rolesDto";
import { App_RolesEntity } from "../../submodules/Portfolio-Platform-Entities/app_rolesEntity";
import AppService from "../../submodules/Portfolio-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class App_RolesAppService extends AppService<App_RolesEntity, App_RolesDto> {
    private readonly app_rolesRepository;
    http: HttpService;
    constructor(app_rolesRepository: Repository<App_RolesEntity>, http: HttpService);
}
