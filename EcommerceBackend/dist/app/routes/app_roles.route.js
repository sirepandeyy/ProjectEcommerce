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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.App_RolesRoutes = void 0;
const common_1 = require("@nestjs/common");
const app_roles_facade_1 = require("../facade/app_roles.facade");
const ResponseModel_1 = require("../../submodules/Portfolio-Platform-Common/ResponseModel");
const SNS_SQS_1 = require("../../submodules/Portfolio-Platform-RabbitMQConfig/SNS_SQS");
const RequestModel_1 = require("../../submodules/Portfolio-Platform-Common/RequestModel");
const Message_1 = require("../../submodules/Portfolio-Platform-Common/Message");
let App_RolesRoutes = class App_RolesRoutes {
    constructor(app_rolesFacade) {
        this.app_rolesFacade = app_rolesFacade;
        this.sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
        this.topicArray = ['APP_ROLES_ADD', 'APP_ROLES_UPDATE', 'APP_ROLES_DELETE'];
        this.serviceName = ['APP_ROLES_SERVICE', 'APP_ROLES_SERVICE', 'APP_ROLES_SERVICE'];
    }
    onModuleInit() {
        for (var i = 0; i < this.topicArray.length; i++) {
            this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
                let value = this.topicArray[i];
                return async (result) => {
                    console.log("Result is........" + JSON.stringify(result));
                    try {
                        let responseModelOfApp_RolesDto = null;
                        console.log(`listening to  ${value} topic.....result is....`);
                        switch (value) {
                            case 'APP_ROLES_ADD':
                                console.log("Inside APP_ROLES_ADD Topic");
                                responseModelOfApp_RolesDto = await this.createAppRoles(result["message"]);
                                break;
                            case 'APP_ROLES_UPDATE':
                                console.log("Inside APP_ROLES_UPDATE Topic");
                                responseModelOfApp_RolesDto = await this.updateAppRoles(result["message"]);
                                break;
                            case 'APP_ROLES_DELETE':
                                console.log("Inside APP_ROLES_DELETE Topic");
                                responseModelOfApp_RolesDto = await this.deleteAppRoles(result["message"]);
                                break;
                        }
                        console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
                        let requestModelOfApp_RolesDto = result["message"];
                        responseModelOfApp_RolesDto.setSocketId(requestModelOfApp_RolesDto.SocketId);
                        responseModelOfApp_RolesDto.setCommunityUrl(requestModelOfApp_RolesDto.CommunityUrl);
                        responseModelOfApp_RolesDto.setRequestId(requestModelOfApp_RolesDto.RequestGuid);
                        responseModelOfApp_RolesDto.setStatus(new Message_1.Message("200", "Group Inserted Successfully", null));
                        for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
                            const element = result.OnSuccessTopicsToPush[index];
                            console.log("ELEMENT: ", JSON.stringify(responseModelOfApp_RolesDto));
                            this.sns_sqs.publishMessageToTopic(element, responseModelOfApp_RolesDto);
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
    allAppRoles() {
        try {
            return this.app_rolesFacade.getAll();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createAppRoles(body) {
        try {
            let result = await this.app_rolesFacade.create(body);
            return result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateAppRoles(body) {
        try {
            console.log("Executing update query..............");
            return await this.app_rolesFacade.update(body);
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    deleteAppRoles(body) {
        try {
            return this.app_rolesFacade.deleteById(body);
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
], App_RolesRoutes.prototype, "allAppRoles", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], App_RolesRoutes.prototype, "createAppRoles", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], App_RolesRoutes.prototype, "updateAppRoles", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], App_RolesRoutes.prototype, "deleteAppRoles", null);
App_RolesRoutes = __decorate([
    common_1.Controller('app_roles'),
    __metadata("design:paramtypes", [app_roles_facade_1.App_RolesFacade])
], App_RolesRoutes);
exports.App_RolesRoutes = App_RolesRoutes;
//# sourceMappingURL=app_roles.route.js.map