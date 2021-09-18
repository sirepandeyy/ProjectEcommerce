import { UserDto } from './../../submodules/Ecommerce-Platform-Dtos/usersDto';
import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
import { User } from "submodules/Ecommerce-Platform-Entities/users";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/users.mapper')

@Injectable()
export default class UsersService extends AppService<User,UserDto>{
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>,public http:HttpService) {
        super(http,usersRepository,User,User,UserDto,dto.usersentityJson, dto.usersdtoJson,dto.usersentityToDtoJson, dto.usersdtoToEntityJson);
             
    }

} 