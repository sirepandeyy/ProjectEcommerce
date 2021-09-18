import { UserDto } from './../../submodules/Ecommerce-Platform-Dtos/usersDto';
import { Injectable } from "@nestjs/common";
import { User } from "submodules/Ecommerce-Platform-Entities/users";
import FacadeBase from "./facadebase";
import UsersAppService from 'app/appService/usersService';
import UsersService from 'app/appService/usersService';

@Injectable()
export class UsersFacade extends FacadeBase<User,UserDto>{
    constructor(private usersService: UsersService){
       super(usersService);
    }
    
}