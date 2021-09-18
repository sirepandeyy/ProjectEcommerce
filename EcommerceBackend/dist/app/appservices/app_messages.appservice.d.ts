import { HttpService } from "@nestjs/common";
import { App_MessagesDto } from "../../submodules/Portfolio-Platform-Dtos/app_messagesDto";
import { App_MessagesEntity } from "../../submodules/Portfolio-Platform-Entities/app_messagesEntity";
import AppService from "../../submodules/Portfolio-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class App_MessagesAppService extends AppService<App_MessagesEntity, App_MessagesDto> {
    private readonly app_messagesRepository;
    http: HttpService;
    constructor(app_messagesRepository: Repository<App_MessagesEntity>, http: HttpService);
}
