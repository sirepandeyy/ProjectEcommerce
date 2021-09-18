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
const tenant_user_appsDto_1 = require("../../submodules/Portfolio-Platform-Dtos/tenant_user_appsDto");
const tenant_user_appsEntity_1 = require("../../submodules/Portfolio-Platform-Entities/tenant_user_appsEntity");
const AppServiceBase_1 = require("../../submodules/Portfolio-Platform-Service/AppServiceBase");
const typeorm_2 = require("typeorm");
let dto = require('../../submodules/Portfolio-Platform-Mappings/tenant_user_apps.mapper');
let Tenant_User_AppsAppService = class Tenant_User_AppsAppService extends AppServiceBase_1.default {
    constructor(tenant_user_appsRepository, http) {
        super(http, tenant_user_appsRepository, tenant_user_appsEntity_1.Tenant_User_AppsEntity, tenant_user_appsEntity_1.Tenant_User_AppsEntity, tenant_user_appsDto_1.Tenant_User_AppsDto, dto.tenant_user_appsentityJson, dto.tenant_user_appsdtoJson, dto.tenant_user_appsentityToDtoJson, dto.tenant_user_appsdtoToEntityJson);
        this.tenant_user_appsRepository = tenant_user_appsRepository;
        this.http = http;
    }
};
Tenant_User_AppsAppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tenant_user_appsEntity_1.Tenant_User_AppsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, common_1.HttpService])
], Tenant_User_AppsAppService);
exports.default = Tenant_User_AppsAppService;
//# sourceMappingURL=tenant_user_apps.appservice.js.map