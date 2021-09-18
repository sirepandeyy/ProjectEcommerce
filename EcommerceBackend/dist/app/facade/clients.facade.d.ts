import ClientsAppService from "../appservices/clients.appservice";
import { ClientsDto } from "../../submodules/Portfolio-Platform-Dtos/clientsDto";
import { ClientsEntity } from "../../submodules/Portfolio-Platform-Entities/clientsEntity";
import FacadeBase from "./facadebase";
export declare class ClientsFacade extends FacadeBase<ClientsEntity, ClientsDto> {
    private clientsAppService;
    constructor(clientsAppService: ClientsAppService);
}
