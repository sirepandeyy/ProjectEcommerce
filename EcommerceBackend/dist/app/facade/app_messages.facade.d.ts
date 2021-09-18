import App_MessagesAppService from "../appservices/app_messages.appservice";
import { App_MessagesDto } from "../../submodules/Portfolio-Platform-Dtos/app_messagesDto";
import { App_MessagesEntity } from "../../submodules/Portfolio-Platform-Entities/app_messagesEntity";
import FacadeBase from "./facadebase";
export declare class App_MessagesFacade extends FacadeBase<App_MessagesEntity, App_MessagesDto> {
    private app_messagesAppService;
    constructor(app_messagesAppService: App_MessagesAppService);
}
