import { RoleDto } from './../../submodules/Ecommerce-Platform-Dtos/roleDto';
import { Role } from './../../submodules/Ecommerce-Platform-Entities/role';
import FacadeBase from "./facadebase";
import RoleService from 'app/appService/rolesService';
export declare class RoleFacade extends FacadeBase<Role, RoleDto> {
    private rolesService;
    constructor(rolesService: RoleService);
}
