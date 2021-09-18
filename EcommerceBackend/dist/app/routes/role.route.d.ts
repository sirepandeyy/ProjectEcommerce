import { RoleFacade } from './../facade/roleFacade';
import { RoleDto } from './../../submodules/Ecommerce-Platform-Dtos/roleDto';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
export declare class RoleRoutes {
    private roleFacade;
    constructor(roleFacade: RoleFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allUsers(): Promise<ResponseModel<RoleDto>>;
    createRoles(body: RequestModel<RoleDto>): Promise<ResponseModel<RoleDto>>;
    updateRoles(body: RequestModel<RoleDto>): Promise<ResponseModel<RoleDto>>;
    deleteRoles(body: RequestModel<RoleDto>): Promise<ResponseModel<RoleDto>>;
}
