import { RolesFacade } from '../facade/roles.facade';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { RolesDto } from '../../submodules/Portfolio-Platform-Dtos/rolesDto';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
export declare class RolesRoutes {
    private rolesFacade;
    constructor(rolesFacade: RolesFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allRoles(): Promise<any>;
    createRoles(body: RequestModel<RolesDto>): Promise<ResponseModel<RolesDto>>;
    updateRoles(body: RequestModel<RolesDto>): Promise<ResponseModel<RolesDto>>;
    deleteRoles(body: RequestModel<RolesDto>): Promise<ResponseModel<RolesDto>>;
}
