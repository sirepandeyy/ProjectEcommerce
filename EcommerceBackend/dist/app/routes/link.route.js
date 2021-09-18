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
exports.LinkRoutes = void 0;
const common_1 = require("@nestjs/common");
const ResponseModel_1 = require("../../submodules/Ecommerce-Platform-Common/ResponseModel");
const RequestModel_1 = require("../../submodules/Ecommerce-Platform-Common/RequestModel");
const Message_1 = require("../../submodules/Ecommerce-Platform-Common/Message");
const SNS_SQS_1 = require("../../submodules/Ecommerce-Platform-RabbitMQConfig/SNS_SQS");
const usersFacade_1 = require("../facade/usersFacade");
const linkFacade_1 = require("../facade/linkFacade");
let LinkRoutes = class LinkRoutes {
    constructor(LinkFacade) {
        this.LinkFacade = LinkFacade;
        this.sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
        this.topicArray = ['LINKS_ADD', 'LINKS_UPDATE', 'LINKS_DELETE'];
        this.serviceName = ['LINKS_SERVICE', 'LINKS_SERVICE', 'LINKS_SERVICE'];
    }
    onModuleInit() {
        for (var i = 0; i < this.topicArray.length; i++) {
            this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
                let value = this.topicArray[i];
                return async (result) => {
                    console.log("Result is........" + JSON.stringify(result));
                    try {
                        let responseModelOfLinkDto = null;
                        console.log(`listening to  ${value} topic.....result is....`);
                        switch (value) {
                            case 'LINKS_ADD':
                                console.log("Inside LINKS_ADD Topic");
                                responseModelOfLinkDto = await this.createLink(result["message"]);
                                break;
                            case 'LINKS_UPDATE':
                                console.log("Inside LINKS_UPDATE Topic");
                                responseModelOfLinkDto = await this.updateLink(result["message"]);
                                break;
                            case 'LINKS_DELETE':
                                console.log("Inside LINKS_DELETE Topic");
                                responseModelOfLinkDto = await this.deleteLink(result["message"]);
                                break;
                        }
                        console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
                        let requestModelOfLinkDto = result["message"];
                        responseModelOfLinkDto.setSocketId(requestModelOfLinkDto.SocketId);
                        responseModelOfLinkDto.setCommunityUrl(requestModelOfLinkDto.CommunityUrl);
                        responseModelOfLinkDto.setRequestId(requestModelOfLinkDto.RequestGuid);
                        responseModelOfLinkDto.setStatus(new Message_1.Message("200", "Group Inserted Successfully", null));
                        for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
                            const element = result.OnSuccessTopicsToPush[index];
                            console.log("ELEMENT: ", JSON.stringify(responseModelOfLinkDto));
                            this.sns_sqs.publishMessageToTopic(element, responseModelOfLinkDto);
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
            return this.LinkFacade.getAll();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    UserById(id) {
        try {
            console.log("id is............." + JSON.stringify(id));
            return this.LinkFacade.getByIds([id]);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createLink(body) {
        try {
            let result = await this.LinkFacade.create(body);
            return result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateLink(body) {
        try {
            console.log("Executing update query..............");
            return await this.LinkFacade.update(body);
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    deleteLink(body) {
        try {
            return this.LinkFacade.deleteById(body);
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
], LinkRoutes.prototype, "allUsers", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LinkRoutes.prototype, "UserById", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], LinkRoutes.prototype, "createLink", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], LinkRoutes.prototype, "updateLink", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestModel_1.RequestModel]),
    __metadata("design:returntype", Promise)
], LinkRoutes.prototype, "deleteLink", null);
LinkRoutes = __decorate([
    common_1.Controller('links'),
    __metadata("design:paramtypes", [linkFacade_1.LinkFacade])
], LinkRoutes);
exports.LinkRoutes = LinkRoutes;
//# sourceMappingURL=link.route.js.map