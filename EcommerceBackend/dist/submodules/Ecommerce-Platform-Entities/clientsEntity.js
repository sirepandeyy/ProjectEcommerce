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
exports.ClientsEntity = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const tenantsEntity_1 = require("./tenantsEntity");
let ClientsEntity = class ClientsEntity extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "address_id", nullable: true }),
    __metadata("design:type", Number)
], ClientsEntity.prototype, "address_id", void 0);
__decorate([
    typeorm_1.Column({ name: "start_date", nullable: true }),
    __metadata("design:type", Date)
], ClientsEntity.prototype, "start_date", void 0);
__decorate([
    typeorm_1.Column({ name: "Expiry_date", nullable: true }),
    __metadata("design:type", Date)
], ClientsEntity.prototype, "expiry_date", void 0);
__decorate([
    typeorm_1.Column({ name: "client_key", nullable: true }),
    __metadata("design:type", String)
], ClientsEntity.prototype, "client_key", void 0);
__decorate([
    typeorm_1.Column({ name: "client_name", nullable: true }),
    __metadata("design:type", String)
], ClientsEntity.prototype, "client_name", void 0);
__decorate([
    typeorm_1.Column({ name: "decsription", nullable: true }),
    __metadata("design:type", String)
], ClientsEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: "contact_id", nullable: true }),
    __metadata("design:type", Number)
], ClientsEntity.prototype, "contact_id", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenantsEntity_1.TenantsEntity, TenantsEntity => TenantsEntity.clients),
    __metadata("design:type", Array)
], ClientsEntity.prototype, "tenants", void 0);
ClientsEntity = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], ClientsEntity);
exports.ClientsEntity = ClientsEntity;
//# sourceMappingURL=clientsEntity.js.map