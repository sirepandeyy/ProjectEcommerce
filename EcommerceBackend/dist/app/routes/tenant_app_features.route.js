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
exports.Tenant_App_FeaturesRoutes = void 0;
const common_1 = require("@nestjs/common");
const tenant_app_features_facade_1 = require("../facade/tenant_app_features.facade");
const ResponseModel_1 = require("../../submodules/Portfolio-Platform-Common/ResponseModel");
const SNS_SQS_1 = require("../../submodules/Portfolio-Platform-RabbitMQConfig/SNS_SQS");
const RequestModel_1 = require("../../submodules/Portfolio-Platform-Common/RequestModel");
const Message_1 = require("../../submodules/Portfolio-Platform-Common/Message");
let Tenant_App_FeaturesRoutes = class Tenant_App_FeaturesRoutes {
    constructor(tenant_app_featuresFacade) {
        this.tenant_app_featuresFacade = tenant_app_featuresFacade;
        this.sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
        this.topicArray = ['TENANT_APP_FEATURES_ADD', 'TENANT_APP_FEATURES_UPDATE', 'TENANT_APP_FEATURES_DELETE'];
        this.serviceName = ['TENANT_APP_FEATURES_SERVICE', 'TENANT_APP_FEATURES_SERVICE', 'TENANT_APP_FEATURES_SERVICE'];
    }
    onModuleInit() {
        for (var i = 0; i < this.topicArray.length; i++) {
            this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
                let value = this.topicArray[i];
                return async (result) => {
                    console.log("Result is........" + JSON.stringify(result));
                    try {
                        let responseModelOfTenant_App_FeaturesDto = null;
                        console.log(`listening to  ${value} topic.....result is....`);
                        switch (value) {
                            case 'TENANT_APP_FEATURES_ADD':
                                console.log("Inside TENANT_APP_FEATURES_ADD Topic");
                                responseModelOfTenant_App_FeaturesDto = await this.createTenantAppFeatures(result["message"]);
                                break;
                            case 'TENANT_APP_FEATURES_UPDATE':
                                console.log("Inside TENANT_APP_FEATURES_UPDATE Topic");
                                responseModelOfTenant_App_FeaturesDto = await this.updateTenantAppFeatures(result["message"]);
                                break;
                            case 'TENANT_APP_FEATURES_DELETE':
                                console.log("Inside TENANT_APP_FEATURES_DELETE Topic");
                                responseModelOfTenant_App_FeaturesDto = await this.deleteTenantAppFeatures(result["message"]);
                                break;
                        }
                        console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
                        let requestModelOfTenant_App_FeaturesDto = result["message"];
                        responseModelOfTenant_App_FeaturesDto.setSocketId(requestModelOfTenant_App_FeaturesDto.SocketId);
                        responseModelOfTenant_App_FeaturesDto.setCommunityUrl(requestModelOfTenant_App_FeaturesDto.CommunityUrl);
                        responseModelOfTenant_App_FeaturesDto.setRequestId(requestModelOfTenant_App_FeaturesDto.RequestGuid);
                        responseModelOfTenant_App_FeaturesDto.setStatus(new Message_1.Message("200", "Group Inserted Successfully", null));
                        for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
                            const element = result.OnSuccessTopicsToPush[index];
                            console.log("ELEMENT: ", JSON.stringify(responseModelOfTenant_App_FeaturesDto));
                            this.sns_sqs.publishMessageToTopic(element, responseModelOfTenant_App_FeaturesDto);
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
    allTenantAppFeatures() {
        try {
            return this.tenant_app_featuresFacade.getAll();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createTenantAppFeatures(body) {
        try {
            let result = await this.tenant_app_featuresFacade.create(body);
            return result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateTenantAppFeatures(body) {
        try {
            console.log("Executing update query..............");
            return await this.tenant_app_featuresFacade.update(body);
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    deleteTenantAppFeatures(body) {
        try {
            return this.tenant_app_featuresFacade.deleteById(body);
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
], Tenant_App_FeaturesRoutes.prototype, "allTenantAppFeatures", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], Tenant_App_FeaturesRoutes.prototype, "createTenantAppFeatures", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], Tenant_App_FeaturesRoutes.prototype, "updateTenantAppFeatures", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], Tenant_App_FeaturesRoutes.prototype, "deleteTenantAppFeatures", null);
Tenant_App_FeaturesRoutes = __decorate([
    common_1.Controller('tenant_app_features'),
    __metadata("design:paramtypes", [tenant_app_features_facade_1.Tenant_App_FeaturesFacade])
], Tenant_App_FeaturesRoutes);
exports.Tenant_App_FeaturesRoutes = Tenant_App_FeaturesRoutes;
//# sourceMappingURL=tenant_app_features.route.js.map