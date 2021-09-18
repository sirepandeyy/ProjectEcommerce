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
exports.RolesEntity = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const app_rolesEntity_1 = require("./app_rolesEntity");
const feature_permissionsEntity_1 = require("./feature_permissionsEntity");
const tenant_user_app_rolesEntity_1 = require("./tenant_user_app_rolesEntity");
let RolesEntity = class RolesEntity extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "role_name", nullable: true }),
    __metadata("design:type", String)
], RolesEntity.prototype, "role_name", void 0);
__decorate([
    typeorm_1.Column({ name: "role_priviledge", nullable: true, type: "json" }),
    __metadata("design:type", Object)
], RolesEntity.prototype, "role_priviledge", void 0);
__decorate([
    typeorm_1.OneToMany((type) => feature_permissionsEntity_1.Feature_PermissionsEntity, (feature_permissions) => feature_permissions.role_id),
    __metadata("design:type", Array)
], RolesEntity.prototype, "feature_permissions", void 0);
__decorate([
    typeorm_1.OneToMany((type) => app_rolesEntity_1.App_RolesEntity, (app_roles) => app_roles.app_id),
    __metadata("design:type", Array)
], RolesEntity.prototype, "app_roles", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_user_app_rolesEntity_1.Tenant_User_App_RolesEntity, (tenant_user_app_roles) => tenant_user_app_roles.role_id),
    __metadata("design:type", Array)
], RolesEntity.prototype, "tenant_user_app_roles", void 0);
RolesEntity = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], RolesEntity);
exports.RolesEntity = RolesEntity;
//# sourceMappingURL=rolesEntity.js.map