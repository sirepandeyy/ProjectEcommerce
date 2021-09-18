import { UserDto } from './../../submodules/Ecommerce-Platform-Dtos/usersDto';
import { User } from "submodules/Ecommerce-Platform-Entities/users";
import FacadeBase from "./facadebase";
import UsersService from 'app/appService/usersService';
export declare class UsersFacade extends FacadeBase<User, UserDto> {
    private usersService;
    constructor(usersService: UsersService);
}
