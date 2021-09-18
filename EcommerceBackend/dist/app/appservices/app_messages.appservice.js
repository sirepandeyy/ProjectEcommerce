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
const app_messagesDto_1 = require("../../submodules/Portfolio-Platform-Dtos/app_messagesDto");
const app_messagesEntity_1 = require("../../submodules/Portfolio-Platform-Entities/app_messagesEntity");
const AppServiceBase_1 = require("../../submodules/Portfolio-Platform-Service/AppServiceBase");
const typeorm_2 = require("typeorm");
let dto = require('../../submodules/Portfolio-Platform-Mappings/app_messages.mapper');
let App_MessagesAppService = class App_MessagesAppService extends AppServiceBase_1.default {
    constructor(app_messagesRepository, http) {
        super(http, app_messagesRepository, app_messagesEntity_1.App_MessagesEntity, app_messagesEntity_1.App_MessagesEntity, app_messagesDto_1.App_MessagesDto, dto.app_messagesentityJson, dto.app_messagesdtoJson, dto.app_messagesentityToDtoJson, dto.app_messagesdtoToEntityJson);
        this.app_messagesRepository = app_messagesRepository;
        this.http = http;
    }
};
App_MessagesAppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(app_messagesEntity_1.App_MessagesEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, common_1.HttpService])
], App_MessagesAppService);
exports.default = App_MessagesAppService;
//# sourceMappingURL=app_messages.appservice.js.map