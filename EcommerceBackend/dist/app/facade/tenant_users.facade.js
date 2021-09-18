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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tenant_UsersFacade = void 0;
const common_1 = require("@nestjs/common");
const tenant_users_appservice_1 = require("../appservices/tenant_users.appservice");
const facadebase_1 = require("./facadebase");
let Tenant_UsersFacade = class Tenant_UsersFacade extends facadebase_1.default {
    constructor(tenant_usersAppService) {
        super(tenant_usersAppService);
        this.tenant_usersAppService = tenant_usersAppService;
    }
};
Tenant_UsersFacade = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [tenant_users_appservice_1.default])
], Tenant_UsersFacade);
exports.Tenant_UsersFacade = Tenant_UsersFacade;
//# sourceMappingURL=tenant_users.facade.js.map