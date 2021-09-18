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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const productDto_1 = require("./../../submodules/Ecommerce-Platform-Dtos/productDto");
const product_1 = require("./../../submodules/Ecommerce-Platform-Entities/product");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const AppServiceBase_1 = require("../../submodules/Ecommerce-Platform-Service/AppServiceBase");
const typeorm_2 = require("typeorm");
const users_1 = require("../../submodules/Ecommerce-Platform-Entities/users");
let dto = require('../../submodules/Ecommerce-Platform-Mappings/product.mapper');
let ProductService = class ProductService extends AppServiceBase_1.default {
    constructor(productRepository, http) {
        super(http, productRepository, product_1.Product, product_1.Product, productDto_1.ProductDto, dto.productsentityJson, dto.productsdtoJson, dto.productsentityToDtoJson, dto.productsdtoToEntityJson);
        this.productRepository = productRepository;
        this.http = http;
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(product_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository, common_1.HttpService])
], ProductService);
exports.default = ProductService;
//# sourceMappingURL=productService.js.map