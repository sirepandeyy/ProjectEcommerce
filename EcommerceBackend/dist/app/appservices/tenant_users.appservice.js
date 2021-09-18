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
const tenant_usersDto_1 = require("../../submodules/Portfolio-Platform-Dtos/tenant_usersDto");
const tenant_usersEntity_1 = require("../../submodules/Portfolio-Platform-Entities/tenant_usersEntity");
const AppServiceBase_1 = require("../../submodules/Portfolio-Platform-Service/AppServiceBase");
const typeorm_2 = require("typeorm");
let dto = require('../../submodules/Portfolio-Platform-Mappings/tenant_users.mapper');
let Tenant_UsersAppService = class Tenant_UsersAppService extends AppServiceBase_1.default {
    constructor(tenant_usersRepository, http) {
        super(http, tenant_usersRepository, tenant_usersEntity_1.Tenant_UsersEntity, tenant_usersEntity_1.Tenant_UsersEntity, tenant_usersDto_1.Tenant_UsersDto, dto.tenant_usersentityJson, dto.tenant_usersdtoJson, dto.tenant_usersentityToDtoJson, dto.tenant_usersdtoToEntityJson);
        this.tenant_usersRepository = tenant_usersRepository;
        this.http = http;
    }
};
Tenant_UsersAppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tenant_usersEntity_1.Tenant_UsersEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, common_1.HttpService])
], Tenant_UsersAppService);
exports.default = Tenant_UsersAppService;
//# sourceMappingURL=tenant_users.appservice.js.map