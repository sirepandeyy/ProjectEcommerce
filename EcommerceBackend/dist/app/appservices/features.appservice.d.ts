import { HttpService } from "@nestjs/common";
import { FeaturesDto } from "../../submodules/Portfolio-Platform-Dtos/featuresDto";
import { FeaturesEntity } from "../../submodules/Portfolio-Platform-Entities/featuresEntity";
import AppService from "../../submodules/Portfolio-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class FeaturesAppService extends AppService<FeaturesEntity, FeaturesDto> {
    private readonly featuresRepository;
    http: HttpService;
    constructor(featuresRepository: Repository<FeaturesEntity>, http: HttpService);
}
