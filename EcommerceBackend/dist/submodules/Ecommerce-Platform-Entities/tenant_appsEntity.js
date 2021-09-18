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
exports.Tenant_AppsEntity = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const appsEntity_1 = require("./appsEntity");
const tenantsEntity_1 = require("./tenantsEntity");
const tenant_app_featuresEntity_1 = require("./tenant_app_featuresEntity");
const tenant_user_appsEntity_1 = require("./tenant_user_appsEntity");
let Tenant_AppsEntity = class Tenant_AppsEntity extends entitybase_1.EntityBase {
    constructor() {
        super(...arguments);
        this.all_features = false;
    }
};
__decorate([
    typeorm_1.Column({ name: "tenant_id", nullable: true }),
    __metadata("design:type", Number)
], Tenant_AppsEntity.prototype, "tenant_id", void 0);
__decorate([
    typeorm_1.Column({ name: "app_id", nullable: true }),
    __metadata("design:type", Number)
], Tenant_AppsEntity.prototype, "app_id", void 0);
__decorate([
    typeorm_1.Column({ name: "connection_string", nullable: true }),
    __metadata("design:type", String)
], Tenant_AppsEntity.prototype, "connection_string", void 0);
__decorate([
    typeorm_1.Column({ name: "all_features", nullable: true }),
    __metadata("design:type", Boolean)
], Tenant_AppsEntity.prototype, "all_features", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => appsEntity_1.AppsEntity, (apps) => apps.tenant_apps),
    __metadata("design:type", Array)
], Tenant_AppsEntity.prototype, "apps", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => tenantsEntity_1.TenantsEntity, (tenants) => tenants.tenant_apps),
    __metadata("design:type", Array)
], Tenant_AppsEntity.prototype, "tenants", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_app_featuresEntity_1.Tenant_App_FeaturesEntity, (tenant_app_features) => tenant_app_features.tenant_app_id),
    __metadata("design:type", Array)
], Tenant_AppsEntity.prototype, "tenant_app_features", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_user_appsEntity_1.Tenant_User_AppsEntity, (tenant_user_apps) => tenant_user_apps.tenant_app_id),
    __metadata("design:type", Array)
], Tenant_AppsEntity.prototype, "tenant_user_apps", void 0);
Tenant_AppsEntity = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], Tenant_AppsEntity);
exports.Tenant_AppsEntity = Tenant_AppsEntity;
//# sourceMappingURL=tenant_appsEntity.js.map