import AppsAppService from "../appservices/apps.appservice";
import { AppsDto } from "../../submodules/Portfolio-Platform-Dtos/appsDto";
import { AppsEntity } from "../../submodules/Portfolio-Platform-Entities/appsEntity";
import FacadeBase from "./facadebase";
export declare class AppsFacade extends FacadeBase<AppsEntity, AppsDto> {
    private appsAppService;
    constructor(appsAppService: AppsAppService);
}
