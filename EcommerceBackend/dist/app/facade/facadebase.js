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
const common_1 = require("@nestjs/common");
const dtobase_1 = require("../../submodules/Ecommerce-Platform-Dtos/DtoBase/dtobase");
const entitybase_1 = require("../../submodules/Ecommerce-Platform-Entities/EntityBase/entitybase");
const AppServiceBase_1 = require("../../submodules/Ecommerce-Platform-Service/AppServiceBase");
let FacadeBase = class FacadeBase {
    constructor(service) {
        this.service = service;
        this.appService = service;
    }
    async getAll() {
        try {
            console.log("Inside facade");
            return this.appService.getAll();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getByIds(ids) {
        try {
            console.log("Inside facade ......");
            return this.appService.getByIds(ids);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async create(body) {
        try {
            console.log("Inside Create of facadebase....body id" + JSON.stringify(body));
            let result = await this.appService.create(body);
            return result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(body) {
        try {
            console.log("Inside Update of facadebase....body id" + JSON.stringify(body));
            console.log("Executing update query..............");
            return await this.appService.updateEntity(body);
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteById(body) {
        let delete_ids = [];
        body.DataCollection.forEach((entity) => {
            delete_ids.push(entity.Id);
        });
        console.log("Ids are......", delete_ids);
        return this.appService.deleteById(delete_ids);
    }
};
FacadeBase = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [AppServiceBase_1.default])
], FacadeBase);
exports.default = FacadeBase;
//# sourceMappingURL=facadebase.js.map