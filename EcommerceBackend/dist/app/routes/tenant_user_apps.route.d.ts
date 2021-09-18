import { Tenant_User_AppsFacade } from '../facade/tenant_user_apps.facade';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { Tenant_User_AppsDto } from '../../submodules/Portfolio-Platform-Dtos/tenant_user_appsDto';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
export declare class Tenant_User_AppsRoutes {
    private tenant_user_appsFacade;
    constructor(tenant_user_appsFacade: Tenant_User_AppsFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allTenantUserApps(): Promise<any>;
    createTenantUserApps(body: RequestModel<Tenant_User_AppsDto>): Promise<ResponseModel<Tenant_User_AppsDto>>;
    updateTenantUserApps(body: RequestModel<Tenant_User_AppsDto>): Promise<ResponseModel<Tenant_User_AppsDto>>;
    deleteTenantUserApps(body: RequestModel<Tenant_User_AppsDto>): Promise<ResponseModel<Tenant_User_AppsDto>>;
}
