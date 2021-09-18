import { HttpService } from "@nestjs/common";
import { UsersDto } from "../../submodules/Portfolio-Platform-Dtos/usersDto";
import { UsersEntity } from "../../submodules/Portfolio-Platform-Entities/usersEntity";
import AppService from "../../submodules/Portfolio-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class UsersAppService extends AppService<UsersEntity, UsersDto> {
    private readonly usersRepository;
    http: HttpService;
    constructor(usersRepository: Repository<UsersEntity>, http: HttpService);
}
