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
exports.Tenant_User_AppsRoutes = void 0;
const common_1 = require("@nestjs/common");
const tenant_user_apps_facade_1 = require("../facade/tenant_user_apps.facade");
const ResponseModel_1 = require("../../submodules/Portfolio-Platform-Common/ResponseModel");
const SNS_SQS_1 = require("../../submodules/Portfolio-Platform-RabbitMQConfig/SNS_SQS");
const RequestModel_1 = require("../../submodules/Portfolio-Platform-Common/RequestModel");
const Message_1 = require("../../submodules/Portfolio-Platform-Common/Message");
let Tenant_User_AppsRoutes = class Tenant_User_AppsRoutes {
    constructor(tenant_user_appsFacade) {
        this.tenant_user_appsFacade = tenant_user_appsFacade;
        this.sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
        this.topicArray = ['TENANT_USER_APPS_ADD', 'TENANT_USER_APPS_UPDATE', 'TENANT_USER_APPS_DELETE'];
        this.serviceName = ['TENANT_USER_APPS_SERVICE', 'TENANT_USER_APPS_SERVICE', 'TENANT_USER_APPS_SERVICE'];
    }
    onModuleInit() {
        for (var i = 0; i < this.topicArray.length; i++) {
            this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
                let value = this.topicArray[i];
                return async (result) => {
                    console.log("Result is........" + JSON.stringify(result));
                    try {
                        let responseModelOfTenant_User_AppsDto = null;
                        console.log(`listening to  ${value} topic.....result is....`);
                        switch (value) {
                            case 'TENANT_USER_APPS_ADD':
                                console.log("Inside TENANT_USER_APPS_ADD Topic");
                                responseModelOfTenant_User_AppsDto = await this.createTenantUserApps(result["message"]);
                                break;
                            case 'TENANT_USER_APPS_UPDATE':
                                console.log("Inside TENANT_USER_APPS_UPDATE Topic");
                                responseModelOfTenant_User_AppsDto = await this.updateTenantUserApps(result["message"]);
                                break;
                            case 'TENANT_USER_APPS_DELETE':
                                console.log("Inside TENANT_USER_APPS_DELETE Topic");
                                responseModelOfTenant_User_AppsDto = await this.deleteTenantUserApps(result["message"]);
                                break;
                        }
                        console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
                        let requestModelOfTenant_User_AppsDto = result["message"];
                        responseModelOfTenant_User_AppsDto.setSocketId(requestModelOfTenant_User_AppsDto.SocketId);
                        responseModelOfTenant_User_AppsDto.setCommunityUrl(requestModelOfTenant_User_AppsDto.CommunityUrl);
                        responseModelOfTenant_User_AppsDto.setRequestId(requestModelOfTenant_User_AppsDto.RequestGuid);
                        responseModelOfTenant_User_AppsDto.setStatus(new Message_1.Message("200", "Group Inserted Successfully", null));
                        for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
                            const element = result.OnSuccessTopicsToPush[index];
                            console.log("ELEMENT: ", JSON.stringify(responseModelOfTenant_User_AppsDto));
                            this.sns_sqs.publishMessageToTopic(element, responseModelOfTenant_User_AppsDto);
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
    allTenantUserApps() {
        try {
            return this.tenant_user_appsFacade.getAll();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createTenantUserApps(body) {
        try {
            let result = await this.tenant_user_appsFacade.create(body);
            return result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateTenantUserApps(body) {
        try {
            return await this.tenant_user_appsFacade.update(body);
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    deleteTenantUserApps(body) {
        try {
            return this.tenant_user_appsFacade.deleteById(body);
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
], Tenant_User_AppsRoutes.prototype, "allTenantUserApps", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], Tenant_User_AppsRoutes.prototype, "createTenantUserApps", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], Tenant_User_AppsRoutes.prototype, "updateTenantUserApps", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], Tenant_User_AppsRoutes.prototype, "deleteTenantUserApps", null);
Tenant_User_AppsRoutes = __decorate([
    common_1.Controller('tenant_user_apps'),
    __metadata("design:paramtypes", [tenant_user_apps_facade_1.Tenant_User_AppsFacade])
], Tenant_User_AppsRoutes);
exports.Tenant_User_AppsRoutes = Tenant_User_AppsRoutes;
//# sourceMappingURL=tenant_user_apps.route.js.map