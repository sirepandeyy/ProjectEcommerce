import UsersAppService from "../appservices/users.appservice";
import { UsersDto } from "../../submodules/Portfolio-Platform-Dtos/usersDto";
import { UsersEntity } from "../../submodules/Portfolio-Platform-Entities/usersEntity";
import FacadeBase from "./facadebase";
export declare class UsersFacade extends FacadeBase<UsersEntity, UsersDto> {
    private usersAppService;
    constructor(usersAppService: UsersAppService);
}
