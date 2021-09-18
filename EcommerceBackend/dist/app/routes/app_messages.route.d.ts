import { App_MessagesFacade } from '../facade/app_messages.facade';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';
import { App_MessagesDto } from '../../submodules/Portfolio-Platform-Dtos/app_messagesDto';
import { RequestModel } from '../../submodules/Portfolio-Platform-Common/RequestModel';
export declare class App_MessagesRoutes {
    private app_messagesFacade;
    constructor(app_messagesFacade: App_MessagesFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allAppMessages(): Promise<any>;
    createAppMessages(body: RequestModel<App_MessagesDto>): Promise<ResponseModel<App_MessagesDto>>;
    updateAppMessages(body: RequestModel<App_MessagesDto>): Promise<ResponseModel<App_MessagesDto>>;
    deleteAppMessages(body: RequestModel<App_MessagesDto>): Promise<ResponseModel<App_MessagesDto>>;
}
