import { PermissionDto } from './../../submodules/Ecommerce-Platform-Dtos/permissionDto';
import { PermissionFacade } from './../facade/permissionFacade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
export declare class PermissionRoutes {
    private permissionFacade;
    constructor(permissionFacade: PermissionFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allUsers(): Promise<ResponseModel<PermissionDto>>;
    createPermission(body: RequestModel<PermissionDto>): Promise<ResponseModel<PermissionDto>>;
}
