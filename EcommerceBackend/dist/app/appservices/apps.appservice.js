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
const appsDto_1 = require("../../submodules/Portfolio-Platform-Dtos/appsDto");
const appsEntity_1 = require("../../submodules/Portfolio-Platform-Entities/appsEntity");
const AppServiceBase_1 = require("../../submodules/Portfolio-Platform-Service/AppServiceBase");
const typeorm_2 = require("typeorm");
let dto = require('../../submodules/Portfolio-Platform-Mappings/apps.mapper');
let AppsAppService = class AppsAppService extends AppServiceBase_1.default {
    constructor(appsRepository, http) {
        super(http, appsRepository, appsEntity_1.AppsEntity, appsEntity_1.AppsEntity, appsDto_1.AppsDto, dto.appsentityJson, dto.appsdtoJson, dto.appsentityToDtoJson, dto.appsdtoToEntityJson);
        this.appsRepository = appsRepository;
        this.http = http;
    }
};
AppsAppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(appsEntity_1.AppsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, common_1.HttpService])
], AppsAppService);
exports.default = AppsAppService;
//# sourceMappingURL=apps.appservice.js.map