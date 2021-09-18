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
exports.Feature_PermissionsEntity = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const featuresEntity_1 = require("./featuresEntity");
const rolesEntity_1 = require("./rolesEntity");
const usersEntity_1 = require("./usersEntity");
let Feature_PermissionsEntity = class Feature_PermissionsEntity extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "feature_id", nullable: true }),
    __metadata("design:type", Number)
], Feature_PermissionsEntity.prototype, "feature_id", void 0);
__decorate([
    typeorm_1.Column({ name: "operation_permitted", nullable: true, type: "json" }),
    __metadata("design:type", Object)
], Feature_PermissionsEntity.prototype, "operation_permitted", void 0);
__decorate([
    typeorm_1.Column({ name: "role_id", nullable: true }),
    __metadata("design:type", Number)
], Feature_PermissionsEntity.prototype, "role_id", void 0);
__decorate([
    typeorm_1.Column({ name: "user_id", nullable: true }),
    __metadata("design:type", Number)
], Feature_PermissionsEntity.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column({ name: "role_feature_security", nullable: true, type: "json" }),
    __metadata("design:type", Object)
], Feature_PermissionsEntity.prototype, "role_feature_security", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => featuresEntity_1.FeaturesEntity, (features) => features.feature_permissions),
    __metadata("design:type", Array)
], Feature_PermissionsEntity.prototype, "features", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => rolesEntity_1.RolesEntity, (roles) => roles.feature_permissions),
    __metadata("design:type", Array)
], Feature_PermissionsEntity.prototype, "roles", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => usersEntity_1.UsersEntity, (users) => users.feature_permissions),
    __metadata("design:type", Array)
], Feature_PermissionsEntity.prototype, "users", void 0);
Feature_PermissionsEntity = __decorate([
    typeorm_1.Entity()
], Feature_PermissionsEntity);
exports.Feature_PermissionsEntity = Feature_PermissionsEntity;
//# sourceMappingURL=feature_permissionsEntity.js.map