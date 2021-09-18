import { Tenant_App_FeaturesFacade } from '../facade/tenant_app_features.facade';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { Tenant_App_FeaturesDto } from '../../submodules/Portfolio-Platform-Dtos/tenant_app_featuresDto';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
export declare class Tenant_App_FeaturesRoutes {
    private tenant_app_featuresFacade;
    constructor(tenant_app_featuresFacade: Tenant_App_FeaturesFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allTenantAppFeatures(): Promise<any>;
    createTenantAppFeatures(body: RequestModel<Tenant_App_FeaturesDto>): Promise<ResponseModel<Tenant_App_FeaturesDto>>;
    updateTenantAppFeatures(body: RequestModel<Tenant_App_FeaturesDto>): Promise<ResponseModel<Tenant_App_FeaturesDto>>;
    deleteTenantAppFeatures(body: RequestModel<Tenant_App_FeaturesDto>): Promise<ResponseModel<Tenant_App_FeaturesDto>>;
}
