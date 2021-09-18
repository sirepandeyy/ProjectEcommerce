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
exports.Feature_PermissionsFacade = void 0;
const common_1 = require("@nestjs/common");
const feature_permissions_appservice_1 = require("../appservices/feature_permissions.appservice");
const facadebase_1 = require("./facadebase");
let Feature_PermissionsFacade = class Feature_PermissionsFacade extends facadebase_1.default {
    constructor(feature_permissionsAppService) {
        super(feature_permissionsAppService);
        this.feature_permissionsAppService = feature_permissionsAppService;
    }
};
Feature_PermissionsFacade = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [feature_permissions_appservice_1.default])
], Feature_PermissionsFacade);
exports.Feature_PermissionsFacade = Feature_PermissionsFacade;
//# sourceMappingURL=feature_permissions.facade.js.map