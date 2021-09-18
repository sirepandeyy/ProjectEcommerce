import { FeaturesFacade } from '../facade/features.facade';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { FeaturesDto } from '../../submodules/Portfolio-Platform-Dtos/featuresDto';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
export declare class FeaturesRoutes {
    private featuresFacade;
    constructor(featuresFacade: FeaturesFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allFeatures(): Promise<any>;
    createFeatures(body: RequestModel<FeaturesDto>): Promise<ResponseModel<FeaturesDto>>;
    updateFeatures(body: RequestModel<FeaturesDto>): Promise<ResponseModel<FeaturesDto>>;
    deleteFeatures(body: RequestModel<FeaturesDto>): Promise<ResponseModel<FeaturesDto>>;
}
