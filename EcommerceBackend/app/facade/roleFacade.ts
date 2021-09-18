import { RoleDto } from './../../submodules/Ecommerce-Platform-Dtos/roleDto';
import { Role } from './../../submodules/Ecommerce-Platform-Entities/role';
import { UserDto } from './../../submodules/Ecommerce-Platform-Dtos/usersDto';
import { Injectable } from "@nestjs/common";
import { User } from "submodules/Ecommerce-Platform-Entities/users";
import FacadeBase from "./facadebase";
import UsersAppService from 'app/appService/usersService';
import RoleService from 'app/appService/rolesService';


@Injectable()
export class RoleFacade extends FacadeBase<Role,RoleDto>{
    constructor(private rolesService:RoleService){
       super(rolesService)
    }
}