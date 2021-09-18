"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_app_featuresDto_1 = require("../../submodules/Portfolio-Platform-Dtos/tenant_app_featuresDto");
const tenant_app_featuresEntity_1 = require("../../submodules/Portfolio-Platform-Entities/tenant_app_featuresEntity");
const AppServiceBase_1 = require("../../submodules/Portfolio-Platform-Service/AppServiceBase");
const typeorm_2 = require("typeorm");
let dto = require('../../submodules/Portfolio-Platform-Mappings/tenant_app_featuresMapper');
let Tenant_App_FeaturesAppService = class Tenant_App_FeaturesAppService extends AppServiceBase_1.default {
    constructor(tenant_app_featuresRepository, http) {
        super(http, tenant_app_featuresRepository, tenant_app_featuresEntity_1.Tenant_App_FeaturesEntity, tenant_app_featuresEntity_1.Tenant_App_FeaturesEntity, tenant_app_featuresDto_1.Tenant_App_FeaturesDto, dto.tenant_app_featuresentityJson, dto.tenant_app_featuresdtoJson, dto.tenant_app_featuresentityToDtoJson, dto.tenant_app_featuresdtoToEntityJson);
        this.tenant_app_featuresRepository = tenant_app_featuresRepository;
        this.http = http;
    }
};
Tenant_App_FeaturesAppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tenant_app_featuresEntity_1.Tenant_App_FeaturesEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, common_1.HttpService])
], Tenant_App_FeaturesAppService);
exports.default = Tenant_App_FeaturesAppService;
//# sourceMappingURL=tenant_app_features.appservice.js.map