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
exports.EntityBase = void 0;
const typeorm_1 = require("typeorm");
let EntityBase = class EntityBase {
    constructor() {
        this.Id = 0;
        this.ModifiedBy = 0;
        this.CreatedBy = 0;
        this.RowVersion = 0;
        this.CreationDate = new Date();
        this.ModifiedDate = new Date();
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'Id' }),
    __metadata("design:type", Number)
], EntityBase.prototype, "Id", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'creation_date',
        nullable: false,
        type: 'timestamp with time zone',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], EntityBase.prototype, "CreationDate", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'modified_date',
        type: 'timestamp with time zone',
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], EntityBase.prototype, "ModifiedDate", void 0);
__decorate([
    typeorm_1.Column({ name: 'created_by', nullable: true }),
    __metadata("design:type", Number)
], EntityBase.prototype, "CreatedBy", void 0);
__decorate([
    typeorm_1.Column({ name: 'modified_by', nullable: true }),
    __metadata("design:type", Number)
], EntityBase.prototype, "ModifiedBy", void 0);
__decorate([
    typeorm_1.VersionColumn({ name: 'row_version', nullable: true }),
    __metadata("design:type", Number)
], EntityBase.prototype, "RowVersion", void 0);
EntityBase = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [])
], EntityBase);
exports.EntityBase = EntityBase;
//# sourceMappingURL=entitybase.js.map