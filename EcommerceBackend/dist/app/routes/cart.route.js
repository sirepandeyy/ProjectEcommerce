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
exports.CartRoutes = void 0;
const cartFacade_1 = require("./../facade/cartFacade");
const common_1 = require("@nestjs/common");
const ResponseModel_1 = require("../../submodules/Ecommerce-Platform-Common/ResponseModel");
const RequestModel_1 = require("../../submodules/Ecommerce-Platform-Common/RequestModel");
const Message_1 = require("../../submodules/Ecommerce-Platform-Common/Message");
const SNS_SQS_1 = require("../../submodules/Ecommerce-Platform-RabbitMQConfig/SNS_SQS");
const usersFacade_1 = require("../facade/usersFacade");
let CartRoutes = class CartRoutes {
    constructor(cartFacade) {
        this.cartFacade = cartFacade;
        this.sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
        this.topicArray = ['CARTS_ADD', 'CARTS_UPDATE', 'CARTS_DELETE'];
        this.serviceName = ['CARTS_SERVICE', 'CARTS_SERVICE', 'CARTS_SERVICE'];
    }
    onModuleInit() {
        for (var i = 0; i < this.topicArray.length; i++) {
            this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
                let value = this.topicArray[i];
                return async (result) => {
                    console.log("Result is........" + JSON.stringify(result));
                    try {
                        let responseModelOfCartDto = null;
                        console.log(`listening to  ${value} topic.....result is....`);
                        switch (value) {
                            case 'CARTS_ADD':
                                console.log("Inside CARTS_ADD Topic");
                                responseModelOfCartDto = await this.createCart(result["message"]);
                                break;
                            case 'CARTS_UPDATE':
                                console.log("Inside CARTS_UPDATE Topic");
                                responseModelOfCartDto = await this.updateCart(result["message"]);
                                break;
                            case 'CARTS_DELETE':
                                console.log("Inside CARTS_DELETE Topic");
                                responseModelOfCartDto = await this.deleteCart(result["message"]);
                                break;
                        }
                        console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
                        let requestModelOfCartDto = result["message"];
                        responseModelOfCartDto.setSocketId(requestModelOfCartDto.SocketId);
                        responseModelOfCartDto.setCommunityUrl(requestModelOfCartDto.CommunityUrl);
                        responseModelOfCartDto.setRequestId(requestModelOfCartDto.RequestGuid);
                        responseModelOfCartDto.setStatus(new Message_1.Message("200", "Group Inserted Successfully", null));
                        for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
                            const element = result.OnSuccessTopicsToPush[index];
                            console.log("ELEMENT: ", JSON.stringify(responseModelOfCartDto));
                            this.sns_sqs.publishMessageToTopic(element, responseModelOfCartDto);
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
            return this.cartFacade.getAll();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createCart(body) {
        try {
            let result = await this.cartFacade.create(body);
            return result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateCart(body) {
        try {
            console.log("Executing update query..............");
            return await this.cartFacade.update(body);
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    deleteCart(body) {
        try {
            return this.cartFacade.deleteById(body);
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
], CartRoutes.prototype, "allUsers", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], CartRoutes.prototype, "createCart", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], CartRoutes.prototype, "updateCart", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], CartRoutes.prototype, "deleteCart", null);
CartRoutes = __decorate([
    common_1.Controller('carts'),
    __metadata("design:paramtypes", [cartFacade_1.CartFacade])
], CartRoutes);
exports.CartRoutes = CartRoutes;
//# sourceMappingURL=cart.route.js.map