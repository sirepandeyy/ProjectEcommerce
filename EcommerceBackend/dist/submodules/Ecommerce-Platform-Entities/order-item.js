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
exports.OrderItem = void 0;
const entitybase_1 = require("./EntityBase/entitybase");
const typeorm_1 = require("typeorm");
const order_1 = require("./order");
let OrderItem = class OrderItem extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrderItem.prototype, "product_title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], OrderItem.prototype, "price", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column({ name: "order_id" }),
    __metadata("design:type", Number)
], OrderItem.prototype, "order_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => order_1.Order, (order) => order.order_items),
    typeorm_1.JoinColumn({ name: 'order_id' }),
    __metadata("design:type", order_1.Order)
], OrderItem.prototype, "order", void 0);
OrderItem = __decorate([
    typeorm_1.Entity('order_items')
], OrderItem);
exports.OrderItem = OrderItem;
//# sourceMappingURL=order-item.js.map