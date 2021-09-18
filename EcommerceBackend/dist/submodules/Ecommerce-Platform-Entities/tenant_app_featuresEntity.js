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
exports.Tenant_App_FeaturesEntity = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const featuresEntity_1 = require("./featuresEntity");
let Tenant_App_FeaturesEntity = class Tenant_App_FeaturesEntity extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "tenant_app_id", nullable: true }),
    __metadata("design:type", Number)
], Tenant_App_FeaturesEntity.prototype, "tenant_app_id", void 0);
__decorate([
    typeorm_1.Column({ name: "feature_id", nullable: true }),
    __metadata("design:type", Number)
], Tenant_App_FeaturesEntity.prototype, "feature_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => featuresEntity_1.FeaturesEntity, (features) => features.tenant_app_features),
    __metadata("design:type", Array)
], Tenant_App_FeaturesEntity.prototype, "features", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => featuresEntity_1.FeaturesEntity, (tenant_apps) => tenant_apps.tenant_app_features),
    __metadata("design:type", Array)
], Tenant_App_FeaturesEntity.prototype, "tenant_apps", void 0);
Tenant_App_FeaturesEntity = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], Tenant_App_FeaturesEntity);
exports.Tenant_App_FeaturesEntity = Tenant_App_FeaturesEntity;
//# sourceMappingURL=tenant_app_featuresEntity.js.map