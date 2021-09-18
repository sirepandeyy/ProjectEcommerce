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
exports.Tenant_User_AppsFacade = void 0;
const common_1 = require("@nestjs/common");
const tenant_user_apps_appservice_1 = require("../appservices/tenant_user_apps.appservice");
const facadebase_1 = require("./facadebase");
let Tenant_User_AppsFacade = class Tenant_User_AppsFacade extends facadebase_1.default {
    constructor(tenant_user_appsAppService) {
        super(tenant_user_appsAppService);
        this.tenant_user_appsAppService = tenant_user_appsAppService;
    }
};
Tenant_User_AppsFacade = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [tenant_user_apps_appservice_1.default])
], Tenant_User_AppsFacade);
exports.Tenant_User_AppsFacade = Tenant_User_AppsFacade;
//# sourceMappingURL=tenant_user_apps.facade.js.map