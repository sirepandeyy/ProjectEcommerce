import { LinkDto } from './../../submodules/Ecommerce-Platform-Dtos/link';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
import { LinkFacade } from 'app/facade/linkFacade';
export declare class LinkRoutes {
    private LinkFacade;
    constructor(LinkFacade: LinkFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allUsers(): Promise<ResponseModel<LinkDto>>;
    UserById(id: number): Promise<ResponseModel<LinkDto>>;
    createLink(body: RequestModel<LinkDto>): Promise<ResponseModel<LinkDto>>;
    updateLink(body: RequestModel<LinkDto>): Promise<ResponseModel<LinkDto>>;
    deleteLink(body: RequestModel<LinkDto>): Promise<ResponseModel<LinkDto>>;
}
