import { HttpService } from "@nestjs/common";
import { Feature_PermissionsDto } from "../../submodules/Portfolio-Platform-Dtos/feature_permissionsDto";
import { Feature_PermissionsEntity } from "../../submodules/Portfolio-Platform-Entities/feature_permissionsEntity";
import AppService from "../../submodules/Portfolio-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class Feature_PermissionsAppService extends AppService<Feature_PermissionsEntity, Feature_PermissionsDto> {
    private readonly feature_permissionsRepository;
    http: HttpService;
    constructor(feature_permissionsRepository: Repository<Feature_PermissionsEntity>, http: HttpService);
}
