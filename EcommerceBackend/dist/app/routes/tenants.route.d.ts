import { TenantsFacade } from '../facade/tenants.facade';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { TenantsDto } from '../../submodules/Portfolio-Platform-Dtos/tenantsDto';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
export declare class TenantsRoutes {
    private tenantsFacade;
    constructor(tenantsFacade: TenantsFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allTenants(): Promise<any>;
    createTenants(body: RequestModel<TenantsDto>): Promise<ResponseModel<TenantsDto>>;
    updateTenants(body: RequestModel<TenantsDto>): Promise<ResponseModel<TenantsDto>>;
    deleteTenants(body: RequestModel<TenantsDto>): Promise<ResponseModel<TenantsDto>>;
}
