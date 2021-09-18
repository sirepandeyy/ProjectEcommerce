import TenantsAppService from "../appservices/tenants.appservice";
import { TenantsDto } from "../../submodules/Portfolio-Platform-Dtos/tenantsDto";
import { TenantsEntity } from "../../submodules/Portfolio-Platform-Entities/tenantsEntity";
import FacadeBase from "./facadebase";
export declare class TenantsFacade extends FacadeBase<TenantsEntity, TenantsDto> {
    private tenantsAppService;
    constructor(tenantsAppService: TenantsAppService);
}
