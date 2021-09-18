import { HttpService } from "@nestjs/common";
import { AppsDto } from "../../submodules/Portfolio-Platform-Dtos/appsDto";
import { AppsEntity } from "../../submodules/Portfolio-Platform-Entities/appsEntity";
import AppService from "../../submodules/Portfolio-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class AppsAppService extends AppService<AppsEntity, AppsDto> {
    private readonly appsRepository;
    http: HttpService;
    constructor(appsRepository: Repository<AppsEntity>, http: HttpService);
}
