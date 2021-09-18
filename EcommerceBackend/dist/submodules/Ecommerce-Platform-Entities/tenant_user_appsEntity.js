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
exports.Tenant_User_AppsEntity = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const tenant_appsEntity_1 = require("./tenant_appsEntity");
const tenant_usersEntity_1 = require("./tenant_usersEntity");
const tenant_user_app_alertsEntity_1 = require("./tenant_user_app_alertsEntity");
const tenant_user_app_rolesEntity_1 = require("./tenant_user_app_rolesEntity");
let Tenant_User_AppsEntity = class Tenant_User_AppsEntity extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "tenant_user_id", nullable: true }),
    __metadata("design:type", Number)
], Tenant_User_AppsEntity.prototype, "tenant_user_id", void 0);
__decorate([
    typeorm_1.Column({ name: "tanant_app_id", nullable: true }),
    __metadata("design:type", Number)
], Tenant_User_AppsEntity.prototype, "tenant_app_id", void 0);
__decorate([
    typeorm_1.Column({ name: "tenant_user_app_permissions", nullable: true }),
    __metadata("design:type", String)
], Tenant_User_AppsEntity.prototype, "tenant_user_app_permissions", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => tenant_appsEntity_1.Tenant_AppsEntity, (tenant_apps) => tenant_apps.app_id),
    __metadata("design:type", Array)
], Tenant_User_AppsEntity.prototype, "tenant_apps", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => tenant_usersEntity_1.Tenant_UsersEntity, (tenant_users) => tenant_users.tenant_user_apps),
    __metadata("design:type", Array)
], Tenant_User_AppsEntity.prototype, "tenant_users", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_user_app_alertsEntity_1.Tenant_User_App_AlertsEntity, (tenant_user_app_alerts) => tenant_user_app_alerts.tenant_user_app_id),
    __metadata("design:type", Array)
], Tenant_User_AppsEntity.prototype, "tenant_user_app_alerts", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_user_app_rolesEntity_1.Tenant_User_App_RolesEntity, (tenant_user_app_roles) => tenant_user_app_roles.tenant_user_app_id),
    __metadata("design:type", Array)
], Tenant_User_AppsEntity.prototype, "tenant_user_app_roles", void 0);
Tenant_User_AppsEntity = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], Tenant_User_AppsEntity);
exports.Tenant_User_AppsEntity = Tenant_User_AppsEntity;
//# sourceMappingURL=tenant_user_appsEntity.js.map