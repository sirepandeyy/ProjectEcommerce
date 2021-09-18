import Tenant_UsersAppService from "../appservices/tenant_users.appservice";
import { Tenant_UsersDto } from "../../submodules/Portfolio-Platform-Dtos/tenant_usersDto";
import { Tenant_UsersEntity } from "../../submodules/Portfolio-Platform-Entities/tenant_usersEntity";
import FacadeBase from "./facadebase";
export declare class Tenant_UsersFacade extends FacadeBase<Tenant_UsersEntity, Tenant_UsersDto> {
    private tenant_usersAppService;
    constructor(tenant_usersAppService: Tenant_UsersAppService);
}
