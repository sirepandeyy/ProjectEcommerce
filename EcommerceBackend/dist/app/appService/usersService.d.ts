import { UserDto } from './../../submodules/Ecommerce-Platform-Dtos/usersDto';
import { HttpService } from "@nestjs/common";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
import { User } from "submodules/Ecommerce-Platform-Entities/users";
export default class UsersService extends AppService<User, UserDto> {
    private readonly usersRepository;
    http: HttpService;
    constructor(usersRepository: Repository<User>, http: HttpService);
}
