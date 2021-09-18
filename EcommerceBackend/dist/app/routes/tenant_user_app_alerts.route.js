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
exports.Tenant_User_App_AlertsRoutes = void 0;
const common_1 = require("@nestjs/common");
const tenant_user_app_alerts_facade_1 = require("../facade/tenant_user_app_alerts.facade");
const ResponseModel_1 = require("../../submodules/Portfolio-Platform-Common/ResponseModel");
const SNS_SQS_1 = require("../../submodules/Portfolio-Platform-RabbitMQConfig/SNS_SQS");
const RequestModel_1 = require("../../submodules/Portfolio-Platform-Common/RequestModel");
const Message_1 = require("../../submodules/Portfolio-Platform-Common/Message");
let Tenant_User_App_AlertsRoutes = class Tenant_User_App_AlertsRoutes {
    constructor(tenant_user_app_alertsFacade) {
        this.tenant_user_app_alertsFacade = tenant_user_app_alertsFacade;
        this.sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
        this.topicArray = ['TENANT_UER_APP_ALERTS_ADD', 'TENANT_UER_APP_ALERTS_UPDATE', 'TENANT_UER_APP_ALERTS_DELETE'];
        this.serviceName = ['TENANT_UER_APP_ALERTS_SERVICE', 'TENANT_UER_APP_ALERTS_SERVICE', 'TENANT_UER_APP_ALERTS_SERVICE'];
    }
    onModuleInit() {
        for (var i = 0; i < this.topicArray.length; i++) {
            this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
                let value = this.topicArray[i];
                return async (result) => {
                    console.log("Result is........" + JSON.stringify(result));
                    try {
                        let responseModelOfTenant_User_App_AlertsDto = null;
                        console.log(`listening to  ${value} topic.....result is....`);
                        switch (value) {
                            case 'TENANT_UER_APP_ALERTS_ADD':
                                console.log("Inside TENANT_UER_APP_ALERTS_ADD Topic");
                                responseModelOfTenant_User_App_AlertsDto = await this.createTenantUserAppAlerts(result["message"]);
                                break;
                            case 'TENANT_UER_APP_ALERTS_UPDATE':
                                console.log("Inside TENANT_UER_APP_ALERTS_UPDATE Topic");
                                responseModelOfTenant_User_App_AlertsDto = await this.updateTenantUserAppAlerts(result["message"]);
                                break;
                            case 'TENANT_UER_APP_ALERTS_DELETE':
                                console.log("Inside TENANT_UER_APP_ALERTS_DELETE Topic");
                                responseModelOfTenant_User_App_AlertsDto = await this.deleteTenantUserAppAlerts(result["message"]);
                                break;
                        }
                        console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
                        let requestModelOfTenant_User_App_AlertsDto = result["message"];
                        responseModelOfTenant_User_App_AlertsDto.setSocketId(requestModelOfTenant_User_App_AlertsDto.SocketId);
                        responseModelOfTenant_User_App_AlertsDto.setCommunityUrl(requestModelOfTenant_User_App_AlertsDto.CommunityUrl);
                        responseModelOfTenant_User_App_AlertsDto.setRequestId(requestModelOfTenant_User_App_AlertsDto.RequestGuid);
                        responseModelOfTenant_User_App_AlertsDto.setStatus(new Message_1.Message("200", "Group Inserted Successfully", null));
                        for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
                            const element = result.OnSuccessTopicsToPush[index];
                            console.log("ELEMENT: ", JSON.stringify(responseModelOfTenant_User_App_AlertsDto));
                            this.sns_sqs.publishMessageToTopic(element, responseModelOfTenant_User_App_AlertsDto);
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
    allTenantUserAppAlerts() {
        try {
            return this.tenant_user_app_alertsFacade.getAll();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createTenantUserAppAlerts(body) {
        try {
            let result = await this.tenant_user_app_alertsFacade.create(body);
            return result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateTenantUserAppAlerts(body) {
        try {
            console.log("Executing update query..............");
            return await this.tenant_user_app_alertsFacade.update(body);
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    deleteTenantUserAppAlerts(body) {
        try {
            return this.tenant_user_app_alertsFacade.deleteById(body);
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
], Tenant_User_App_AlertsRoutes.prototype, "allTenantUserAppAlerts", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], Tenant_User_App_AlertsRoutes.prototype, "createTenantUserAppAlerts", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], Tenant_User_App_AlertsRoutes.prototype, "updateTenantUserAppAlerts", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], Tenant_User_App_AlertsRoutes.prototype, "deleteTenantUserAppAlerts", null);
Tenant_User_App_AlertsRoutes = __decorate([
    common_1.Controller('tenant_user_app_alerts'),
    __metadata("design:paramtypes", [tenant_user_app_alerts_facade_1.Tenant_User_App_AlertsFacade])
], Tenant_User_App_AlertsRoutes);
exports.Tenant_User_App_AlertsRoutes = Tenant_User_App_AlertsRoutes;
//# sourceMappingURL=tenant_user_app_alerts.route.js.map