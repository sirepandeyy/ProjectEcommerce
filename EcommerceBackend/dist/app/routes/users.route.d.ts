import { UserDto } from './../../submodules/Ecommerce-Platform-Dtos/usersDto';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
import { UsersFacade } from 'app/facade/usersFacade';
export declare class UsersRoutes {
    private usersFacade;
    constructor(usersFacade: UsersFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allUsers(): Promise<ResponseModel<UserDto>>;
    createUsers(body: RequestModel<UserDto>): Promise<ResponseModel<UserDto>>;
    updateUsers(body: RequestModel<UserDto>): Promise<ResponseModel<UserDto>>;
    deleteUsers(body: RequestModel<UserDto>): Promise<ResponseModel<UserDto>>;
}
