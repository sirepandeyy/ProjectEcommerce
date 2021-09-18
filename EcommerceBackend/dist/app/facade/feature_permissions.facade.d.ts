import Feature_PermissionsAppService from "../appservices/feature_permissions.appservice";
import { Feature_PermissionsDto } from "../../submodules/Portfolio-Platform-Dtos/feature_permissionsDto";
import { Feature_PermissionsEntity } from "../../submodules/Portfolio-Platform-Entities/feature_permissionsEntity";
import FacadeBase from "./facadebase";
export declare class Feature_PermissionsFacade extends FacadeBase<Feature_PermissionsEntity, Feature_PermissionsDto> {
    private feature_permissionsAppService;
    constructor(feature_permissionsAppService: Feature_PermissionsAppService);
}
