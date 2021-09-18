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
exports.App_MessagesEntity = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const appsEntity_1 = require("./appsEntity");
let App_MessagesEntity = class App_MessagesEntity extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "user_id", nullable: true }),
    __metadata("design:type", Number)
], App_MessagesEntity.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column({ name: "tenant_id", nullable: true }),
    __metadata("design:type", Number)
], App_MessagesEntity.prototype, "tenant_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => appsEntity_1.AppsEntity, (apps) => apps.app_message),
    __metadata("design:type", Array)
], App_MessagesEntity.prototype, "apps", void 0);
__decorate([
    typeorm_1.Column({ name: "app_id", nullable: true }),
    __metadata("design:type", Number)
], App_MessagesEntity.prototype, "app_id", void 0);
__decorate([
    typeorm_1.Column({ name: "is_notification", nullable: true }),
    __metadata("design:type", Boolean)
], App_MessagesEntity.prototype, "is_notification", void 0);
__decorate([
    typeorm_1.Column({ name: "subject", nullable: true }),
    __metadata("design:type", String)
], App_MessagesEntity.prototype, "subject", void 0);
__decorate([
    typeorm_1.Column({ name: "message_body", nullable: true }),
    __metadata("design:type", String)
], App_MessagesEntity.prototype, "message_body", void 0);
__decorate([
    typeorm_1.Column({ name: "is_read", nullable: true }),
    __metadata("design:type", Boolean)
], App_MessagesEntity.prototype, "is_read", void 0);
App_MessagesEntity = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(['Id'])
], App_MessagesEntity);
exports.App_MessagesEntity = App_MessagesEntity;
//# sourceMappingURL=app_messagesEntity.js.map