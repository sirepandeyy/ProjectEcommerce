import { Tenant_User_App_AlertsFacade } from '../facade/tenant_user_app_alerts.facade';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { Tenant_User_App_AlertsDto } from '../../submodules/Portfolio-Platform-Dtos/tenant_user_app_alertsDto';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
export declare class Tenant_User_App_AlertsRoutes {
    private tenant_user_app_alertsFacade;
    constructor(tenant_user_app_alertsFacade: Tenant_User_App_AlertsFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allTenantUserAppAlerts(): Promise<any>;
    createTenantUserAppAlerts(body: RequestModel<Tenant_User_App_AlertsDto>): Promise<ResponseModel<Tenant_User_App_AlertsDto>>;
    updateTenantUserAppAlerts(body: RequestModel<Tenant_User_App_AlertsDto>): Promise<ResponseModel<Tenant_User_App_AlertsDto>>;
    deleteTenantUserAppAlerts(body: RequestModel<Tenant_User_App_AlertsDto>): Promise<ResponseModel<Tenant_User_App_AlertsDto>>;
}
