import { RoleDto } from './../../submodules/Ecommerce-Platform-Dtos/roleDto';
import { Role } from './../../submodules/Ecommerce-Platform-Entities/role';
import { HttpService } from "@nestjs/common";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class RoleService extends AppService<Role, RoleDto> {
    private readonly roleRepository;
    http: HttpService;
    constructor(roleRepository: Repository<Role>, http: HttpService);
}
