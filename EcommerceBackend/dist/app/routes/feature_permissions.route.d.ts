import { Feature_PermissionsFacade } from '../facade/feature_permissions.facade';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { Feature_PermissionsDto } from '../../submodules/Portfolio-Platform-Dtos/feature_permissionsDto';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
export declare class Feature_PermissionsRoutes {
    private feature_permissionsFacade;
    constructor(feature_permissionsFacade: Feature_PermissionsFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allFeaturePermissions(): Promise<any>;
    createFeaturePermissions(body: RequestModel<Feature_PermissionsDto>): Promise<ResponseModel<Feature_PermissionsDto>>;
    updateFeaturePermissions(body: RequestModel<Feature_PermissionsDto>): Promise<ResponseModel<Feature_PermissionsDto>>;
    deleteFeaturePermissions(body: RequestModel<Feature_PermissionsDto>): Promise<ResponseModel<Feature_PermissionsDto>>;
}
