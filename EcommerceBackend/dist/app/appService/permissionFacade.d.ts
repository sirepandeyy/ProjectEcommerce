import { PermissionDto } from './../../submodules/Ecommerce-Platform-Dtos/permissionDto';
import { Permission } from './../../submodules/Ecommerce-Platform-Entities/permission';
import { HttpService } from "@nestjs/common";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class PermissionService extends AppService<Permission, PermissionDto> {
    private readonly permissionRepository;
    http: HttpService;
    constructor(permissionRepository: Repository<Permission>, http: HttpService);
}
