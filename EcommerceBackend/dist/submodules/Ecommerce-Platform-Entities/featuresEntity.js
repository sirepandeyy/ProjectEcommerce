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
exports.FeaturesEntity = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const appsEntity_1 = require("./appsEntity");
const feature_permissionsEntity_1 = require("./feature_permissionsEntity");
let FeaturesEntity = class FeaturesEntity extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "feature_id", nullable: true }),
    __metadata("design:type", Number)
], FeaturesEntity.prototype, "feature_id", void 0);
__decorate([
    typeorm_1.Column({ name: "feature_name", nullable: true }),
    __metadata("design:type", String)
], FeaturesEntity.prototype, "feature_name", void 0);
__decorate([
    typeorm_1.Column({ name: "app_id", nullable: true }),
    __metadata("design:type", Number)
], FeaturesEntity.prototype, "app_id", void 0);
__decorate([
    typeorm_1.Column({ name: "base_feature_id", nullable: true }),
    __metadata("design:type", Number)
], FeaturesEntity.prototype, "base_feature_id", void 0);
__decorate([
    typeorm_1.Column({ name: "feature_description", nullable: true }),
    __metadata("design:type", String)
], FeaturesEntity.prototype, "feature_description", void 0);
__decorate([
    typeorm_1.Column({ name: "feature_key", nullable: true }),
    __metadata("design:type", String)
], FeaturesEntity.prototype, "feature_key", void 0);
__decorate([
    typeorm_1.Column({ name: "operations", nullable: true }),
    __metadata("design:type", String)
], FeaturesEntity.prototype, "operations", void 0);
__decorate([
    typeorm_1.Column({ name: "feature_type", nullable: true }),
    __metadata("design:type", Number)
], FeaturesEntity.prototype, "feature_type", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => appsEntity_1.AppsEntity, (apps) => apps.features),
    __metadata("design:type", Array)
], FeaturesEntity.prototype, "apps", void 0);
__decorate([
    typeorm_1.OneToMany((type) => feature_permissionsEntity_1.Feature_PermissionsEntity, (feature_permissions) => feature_permissions.feature_id),
    __metadata("design:type", Array)
], FeaturesEntity.prototype, "feature_permissions", void 0);
__decorate([
    typeorm_1.OneToMany((type) => feature_permissionsEntity_1.Feature_PermissionsEntity, (tenant_app_feature) => tenant_app_feature.feature_id),
    __metadata("design:type", Array)
], FeaturesEntity.prototype, "tenant_app_features", void 0);
FeaturesEntity = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], FeaturesEntity);
exports.FeaturesEntity = FeaturesEntity;
//# sourceMappingURL=featuresEntity.js.map