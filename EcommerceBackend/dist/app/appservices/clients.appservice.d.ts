import { HttpService } from "@nestjs/common";
import { ClientsDto } from "../../submodules/Portfolio-Platform-Dtos/clientsDto";
import { ClientsEntity } from "../../submodules/Portfolio-Platform-Entities/clientsEntity";
import AppService from "../../submodules/Portfolio-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class ClientsAppService extends AppService<ClientsEntity, ClientsDto> {
    private readonly clientsRepository;
    http: HttpService;
    constructor(clientsRepository: Repository<ClientsEntity>, http: HttpService);
}
