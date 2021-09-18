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
exports.ProductRoutes = void 0;
const productFacade_1 = require("./../facade/productFacade");
const common_1 = require("@nestjs/common");
const ResponseModel_1 = require("../../submodules/Ecommerce-Platform-Common/ResponseModel");
const RequestModel_1 = require("../../submodules/Ecommerce-Platform-Common/RequestModel");
const Message_1 = require("../../submodules/Ecommerce-Platform-Common/Message");
const SNS_SQS_1 = require("../../submodules/Ecommerce-Platform-RabbitMQConfig/SNS_SQS");
const usersFacade_1 = require("../facade/usersFacade");
let ProductRoutes = class ProductRoutes {
    constructor(productFacade) {
        this.productFacade = productFacade;
        this.sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
        this.topicArray = ['PRODUCTS_ADD', 'PRODUCTS_UPDATE', 'PRODUCTS_DELETE'];
        this.serviceName = ['PRODUCTS_SERVICE', 'PRODUCTS_SERVICE', 'PRODUCTS_SERVICE'];
    }
    onModuleInit() {
        for (var i = 0; i < this.topicArray.length; i++) {
            this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
                let value = this.topicArray[i];
                return async (result) => {
                    console.log("Result is........" + JSON.stringify(result));
                    try {
                        let responseModelOfProductDto = null;
                        console.log(`listening to  ${value} topic.....result is....`);
                        switch (value) {
                            case 'PRODUCTS_ADD':
                                console.log("Inside PRODUCTS_ADD Topic");
                                responseModelOfProductDto = await this.createProduct(result["message"]);
                                break;
                            case 'PRODUCTS_UPDATE':
                                console.log("Inside PRODUCTS_UPDATE Topic");
                                responseModelOfProductDto = await this.updateProduct(result["message"]);
                                break;
                            case 'PRODUCTS_DELETE':
                                console.log("Inside PRODUCTS_DELETE Topic");
                                responseModelOfProductDto = await this.deleteProduct(result["message"]);
                                break;
                        }
                        console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
                        let requestModelOfProductDto = result["message"];
                        responseModelOfProductDto.setSocketId(requestModelOfProductDto.SocketId);
                        responseModelOfProductDto.setCommunityUrl(requestModelOfProductDto.CommunityUrl);
                        responseModelOfProductDto.setRequestId(requestModelOfProductDto.RequestGuid);
                        responseModelOfProductDto.setStatus(new Message_1.Message("200", "Group Inserted Successfully", null));
                        for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
                            const element = result.OnSuccessTopicsToPush[index];
                            console.log("ELEMENT: ", JSON.stringify(responseModelOfProductDto));
                            this.sns_sqs.publishMessageToTopic(element, responseModelOfProductDto);
                        }
                    }
                    catch (error) {
                        console.log("Inside Catch.........");
                        console.log(error, result);
                        for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
                            const element = result.OnFailureTopicsToPush[index];
                            let errorResult = new ResponseModel_1.ResponseModel(null, null, null, null, null, null, null, null, null);
                            ;
                            errorResult.setStatus(new Message_1.Message("500", error, null));
                            this.sns_sqs.publishMessageToTopic(element, errorResult);
                        }
                    }
                };
            })());
        }
    }
    allUsers() {
        try {
            return this.productFacade.getAll();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    productById(id) {
        try {
            console.log("id is............." + JSON.stringify(id));
            return this.productFacade.getByIds([id]);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createProduct(body) {
        try {
            let result = await this.productFacade.create(body);
            return result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateProduct(body) {
        try {
            console.log("Executing update query..............");
            return await this.productFacade.update(body);
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    deleteProduct(body) {
        try {
            return this.productFacade.deleteById(body);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductRoutes.prototype, "allUsers", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductRoutes.prototype, "productById", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], ProductRoutes.prototype, "createProduct", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], ProductRoutes.prototype, "updateProduct", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], ProductRoutes.prototype, "deleteProduct", null);
ProductRoutes = __decorate([
    common_1.Controller('products'),
    __metadata("design:paramtypes", [productFacade_1.ProductFacade])
], ProductRoutes);
exports.ProductRoutes = ProductRoutes;
//# sourceMappingURL=product.route.js.map