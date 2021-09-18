import { AppsFacade } from '../facade/apps.facade';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { AppsDto } from '../../submodules/Portfolio-Platform-Dtos/appsDto';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
export declare class AppsRoutes {
    private appsFacade;
    constructor(appsFacade: AppsFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allApps(): Promise<any>;
    createApps(body: RequestModel<AppsDto>): Promise<ResponseModel<AppsDto>>;
    updateApps(body: RequestModel<AppsDto>): Promise<ResponseModel<AppsDto>>;
    deleteApps(body: RequestModel<AppsDto>): Promise<ResponseModel<AppsDto>>;
}
