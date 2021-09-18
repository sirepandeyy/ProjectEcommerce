import { Permission } from './../../submodules/Ecommerce-Platform-Entities/permission';
import FacadeBase from "./facadebase";
import { PermissionDto } from 'submodules/Ecommerce-Platform-Dtos/permissionDto';
import PermissionService from 'app/appService/permissionService';
export declare class PermissionFacade extends FacadeBase<Permission, PermissionDto> {
    private PermissionService;
    constructor(PermissionService: PermissionService);
}
