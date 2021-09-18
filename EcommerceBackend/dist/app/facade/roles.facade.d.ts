import RolesAppService from "../appservices/roles.appservice";
import { RolesDto } from "../../submodules/Portfolio-Platform-Dtos/rolesDto";
import { RolesEntity } from "../../submodules/Portfolio-Platform-Entities/rolesEntity";
import FacadeBase from "./facadebase";
export declare class RolesFacade extends FacadeBase<RolesEntity, RolesDto> {
    private rolesAppService;
    constructor(rolesAppService: RolesAppService);
}
