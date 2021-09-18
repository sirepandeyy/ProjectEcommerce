import { HttpService } from "@nestjs/common";
import { RolesDto } from "../../submodules/Portfolio-Platform-Dtos/rolesDto";
import { RolesEntity } from "../../submodules/Portfolio-Platform-Entities/rolesEntity";
import AppService from "../../submodules/Portfolio-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class RolesAppService extends AppService<RolesEntity, RolesDto> {
    private readonly rolesRepository;
    http: HttpService;
    constructor(rolesRepository: Repository<RolesEntity>, http: HttpService);
}
