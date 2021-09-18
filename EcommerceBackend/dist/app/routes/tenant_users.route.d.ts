import { Tenant_UsersFacade } from '../facade/tenant_users.facade';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { Tenant_UsersDto } from '../../submodules/Portfolio-Platform-Dtos/tenant_usersDto';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
export declare class Tenant_UsersRoutes {
    private tenant_usersFacade;
    constructor(tenant_usersFacade: Tenant_UsersFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allTenantUsers(): Promise<any>;
    createTenantUsers(body: RequestModel<Tenant_UsersDto>): Promise<ResponseModel<Tenant_UsersDto>>;
    updateTenantUsers(body: RequestModel<Tenant_UsersDto>): Promise<ResponseModel<Tenant_UsersDto>>;
    deleteTenantUsers(body: RequestModel<Tenant_UsersDto>): Promise<ResponseModel<Tenant_UsersDto>>;
}
