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
exports.OrderItemRoutes = void 0;
const orderItemfacade_1 = require("./../facade/orderItemfacade");
const common_1 = require("@nestjs/common");
const ResponseModel_1 = require("../../submodules/Ecommerce-Platform-Common/ResponseModel");
const RequestModel_1 = require("../../submodules/Ecommerce-Platform-Common/RequestModel");
const Message_1 = require("../../submodules/Ecommerce-Platform-Common/Message");
const SNS_SQS_1 = require("../../submodules/Ecommerce-Platform-RabbitMQConfig/SNS_SQS");
const usersFacade_1 = require("../facade/usersFacade");
let OrderItemRoutes = class OrderItemRoutes {
    constructor(OrderItemFacade) {
        this.OrderItemFacade = OrderItemFacade;
        this.sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
        this.topicArray = ['ORDER_ITEMS_ADD', 'ORDER_ITEMS_UPDATE', 'ORDER_ITEMS_DELETE'];
        this.serviceName = ['ORDER_ITEMS_SERVICE', 'ORDER_ITEMS_SERVICE', 'ORDER_ITEMS_SERVICE'];
    }
    onModuleInit() {
        for (var i = 0; i < this.topicArray.length; i++) {
            this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
                let value = this.topicArray[i];
                return async (result) => {
                    console.log("Result is........" + JSON.stringify(result));
                    try {
                        let responseModelOfOrderItemDto = null;
                        console.log(`listening to  ${value} topic.....result is....`);
                        switch (value) {
                            case 'ORDER_ITEMS_ADD':
                                console.log("Inside ORDER_ITEMS_ADD Topic");
                                responseModelOfOrderItemDto = await this.createOrderItem(result["message"]);
                                break;
                            case 'ORDER_ITEMS_UPDATE':
                                console.log("Inside ORDER_ITEMS_UPDATE Topic");
                                responseModelOfOrderItemDto = await this.updateOrderItem(result["message"]);
                                break;
                            case 'ORDER_ITEMS_DELETE':
                                console.log("Inside ORDER_ITEMS_DELETE Topic");
                                responseModelOfOrderItemDto = await this.deleteOrderItem(result["message"]);
                                break;
                        }
                        console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
                        let requestModelOfOrderItemDto = result["message"];
                        responseModelOfOrderItemDto.setSocketId(requestModelOfOrderItemDto.SocketId);
                        responseModelOfOrderItemDto.setCommunityUrl(requestModelOfOrderItemDto.CommunityUrl);
                        responseModelOfOrderItemDto.setRequestId(requestModelOfOrderItemDto.RequestGuid);
                        responseModelOfOrderItemDto.setStatus(new Message_1.Message("200", "Group Inserted Successfully", null));
                        for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
                            const element = result.OnSuccessTopicsToPush[index];
                            console.log("ELEMENT: ", JSON.stringify(responseModelOfOrderItemDto));
                            this.sns_sqs.publishMessageToTopic(element, responseModelOfOrderItemDto);
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
            return this.OrderItemFacade.getAll();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createOrderItem(body) {
        try {
            let result = await this.OrderItemFacade.create(body);
            return result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateOrderItem(body) {
        try {
            console.log("Executing update query..............");
            return await this.OrderItemFacade.update(body);
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    deleteOrderItem(body) {
        try {
            return this.OrderItemFacade.deleteById(body);
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
], OrderItemRoutes.prototype, "allUsers", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], OrderItemRoutes.prototype, "createOrderItem", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], OrderItemRoutes.prototype, "updateOrderItem", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], OrderItemRoutes.prototype, "deleteOrderItem", null);
OrderItemRoutes = __decorate([
    common_1.Controller('order_items'),
    __metadata("design:paramtypes", [orderItemfacade_1.OrderItemFacade])
], OrderItemRoutes);
exports.OrderItemRoutes = OrderItemRoutes;
//# sourceMappingURL=orderItem.route.js.map