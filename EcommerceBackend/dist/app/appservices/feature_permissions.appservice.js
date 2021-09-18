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
const feature_permissionsDto_1 = require("../../submodules/Portfolio-Platform-Dtos/feature_permissionsDto");
const feature_permissionsEntity_1 = require("../../submodules/Portfolio-Platform-Entities/feature_permissionsEntity");
const AppServiceBase_1 = require("../../submodules/Portfolio-Platform-Service/AppServiceBase");
const typeorm_2 = require("typeorm");
let dto = require('../../submodules/Portfolio-Platform-Mappings/feature_permissions.mapper');
let Feature_PermissionsAppService = class Feature_PermissionsAppService extends AppServiceBase_1.default {
    constructor(feature_permissionsRepository, http) {
        super(http, feature_permissionsRepository, feature_permissionsEntity_1.Feature_PermissionsEntity, feature_permissionsEntity_1.Feature_PermissionsEntity, feature_permissionsDto_1.Feature_PermissionsDto, dto.feature_permissionsentityJson, dto.feature_permissionsdtoJson, dto.feature_permissionsentityToDtoJson, dto.feature_permissionsdtoToEntityJson);
        this.feature_permissionsRepository = feature_permissionsRepository;
        this.http = http;
    }
};
Feature_PermissionsAppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(feature_permissionsEntity_1.Feature_PermissionsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, common_1.HttpService])
], Feature_PermissionsAppService);
exports.default = Feature_PermissionsAppService;
//# sourceMappingURL=feature_permissions.appservice.js.map