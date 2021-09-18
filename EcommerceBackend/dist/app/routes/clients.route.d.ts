import { ClientsFacade } from '../facade/clients.facade';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { ClientsDto } from '../../submodules/Portfolio-Platform-Dtos/clientsDto';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
export declare class ClientsRoutes {
    private clientsFacade;
    constructor(clientsFacade: ClientsFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allClients(): Promise<any>;
    createClients(body: RequestModel<ClientsDto>): Promise<ResponseModel<ClientsDto>>;
    updateClients(body: RequestModel<ClientsDto>): Promise<ResponseModel<ClientsDto>>;
    deleteClients(body: RequestModel<ClientsDto>): Promise<ResponseModel<ClientsDto>>;
}
