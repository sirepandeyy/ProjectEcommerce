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
exports.Tenant_UsersEntity = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const tenantsEntity_1 = require("./tenantsEntity");
const tenant_user_appsEntity_1 = require("./tenant_user_appsEntity");
const usersEntity_1 = require("./usersEntity");
let Tenant_UsersEntity = class Tenant_UsersEntity extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "tenant_id", nullable: true }),
    __metadata("design:type", Number)
], Tenant_UsersEntity.prototype, "tenant_id", void 0);
__decorate([
    typeorm_1.Column({ name: "user_id", nullable: true }),
    __metadata("design:type", Number)
], Tenant_UsersEntity.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column({ name: "identity_provider_subscriber_id", nullable: true }),
    __metadata("design:type", String)
], Tenant_UsersEntity.prototype, "identity_provider_subscriber_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => usersEntity_1.UsersEntity, (users) => users.tenant_users),
    __metadata("design:type", Array)
], Tenant_UsersEntity.prototype, "users", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => tenantsEntity_1.TenantsEntity, (tenants) => tenants.tenant_users),
    __metadata("design:type", Array)
], Tenant_UsersEntity.prototype, "tenants", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_user_appsEntity_1.Tenant_User_AppsEntity, (tenant_user_apps) => tenant_user_apps.tenant_user_id),
    __metadata("design:type", Array)
], Tenant_UsersEntity.prototype, "tenant_user_apps", void 0);
Tenant_UsersEntity = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], Tenant_UsersEntity);
exports.Tenant_UsersEntity = Tenant_UsersEntity;
//# sourceMappingURL=tenant_usersEntity.js.map