import { RoleDto } from './../../submodules/Ecommerce-Platform-Dtos/roleDto';
import { Role } from './../../submodules/Ecommerce-Platform-Entities/role';
import { UserDto } from './../../submodules/Ecommerce-Platform-Dtos/usersDto';
import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
import { User } from "submodules/Ecommerce-Platform-Entities/users";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/roles.mapper')

@Injectable()
export default class RoleService extends AppService<Role,RoleDto>{
    constructor(@InjectRepository(Role) private readonly roleRepository: Repository<Role>,public http:HttpService) {
        super(http,roleRepository,Role,Role,RoleDto,dto.rolesentityJson, dto.rolesdtoJson,dto.rolesentityToDtoJson, dto.rolesdtoToEntityJson);
             
    }

} 