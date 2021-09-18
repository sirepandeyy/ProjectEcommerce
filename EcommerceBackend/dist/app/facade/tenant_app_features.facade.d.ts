import Tenant_App_FeaturesAppService from "../appservices/tenant_app_features.appservice";
import { Tenant_App_FeaturesDto } from "../../submodules/Portfolio-Platform-Dtos/tenant_app_featuresDto";
import { Tenant_App_FeaturesEntity } from "../../submodules/Portfolio-Platform-Entities/tenant_app_featuresEntity";
import FacadeBase from "./facadebase";
export declare class Tenant_App_FeaturesFacade extends FacadeBase<Tenant_App_FeaturesEntity, Tenant_App_FeaturesDto> {
    private tenant_app_featuresAppService;
    constructor(tenant_app_featuresAppService: Tenant_App_FeaturesAppService);
}
