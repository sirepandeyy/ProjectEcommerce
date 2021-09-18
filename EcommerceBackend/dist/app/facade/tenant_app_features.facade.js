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
exports.Tenant_App_FeaturesFacade = void 0;
const common_1 = require("@nestjs/common");
const tenant_app_features_appservice_1 = require("../appservices/tenant_app_features.appservice");
const facadebase_1 = require("./facadebase");
let Tenant_App_FeaturesFacade = class Tenant_App_FeaturesFacade extends facadebase_1.default {
    constructor(tenant_app_featuresAppService) {
        super(tenant_app_featuresAppService);
        this.tenant_app_featuresAppService = tenant_app_featuresAppService;
    }
};
Tenant_App_FeaturesFacade = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [tenant_app_features_appservice_1.default])
], Tenant_App_FeaturesFacade);
exports.Tenant_App_FeaturesFacade = Tenant_App_FeaturesFacade;
//# sourceMappingURL=tenant_app_features.facade.js.map