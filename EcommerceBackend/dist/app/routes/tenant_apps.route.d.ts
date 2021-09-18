import { Tenant_AppsFacade } from '../facade/tenant_apps.facade';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { Tenant_AppsDto } from '../../submodules/Portfolio-Platform-Dtos/tenant_appsDto';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
export declare class Tenant_AppsRoutes {
    private tenant_appsFacade;
    constructor(tenant_appsFacade: Tenant_AppsFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allTenantApps(): Promise<any>;
    createTenantApps(body: RequestModel<Tenant_AppsDto>): Promise<ResponseModel<Tenant_AppsDto>>;
    updateTenantApps(body: RequestModel<Tenant_AppsDto>): Promise<ResponseModel<Tenant_AppsDto>>;
    deleteTenantApps(body: RequestModel<Tenant_AppsDto>): Promise<ResponseModel<Tenant_AppsDto>>;
}
