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
exports.Feature_PermissionsRoutes = void 0;
const common_1 = require("@nestjs/common");
const feature_permissions_facade_1 = require("../facade/feature_permissions.facade");
const ResponseModel_1 = require("../../submodules/Portfolio-Platform-Common/ResponseModel");
const SNS_SQS_1 = require("../../submodules/Portfolio-Platform-RabbitMQConfig/SNS_SQS");
const RequestModel_1 = require("../../submodules/Portfolio-Platform-Common/RequestModel");
const Message_1 = require("../../submodules/Portfolio-Platform-Common/Message");
let Feature_PermissionsRoutes = class Feature_PermissionsRoutes {
    constructor(feature_permissionsFacade) {
        this.feature_permissionsFacade = feature_permissionsFacade;
        this.sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
        this.topicArray = ['FEATURE_PERMISSIONS_ADD', 'FEATURE_PERMISSIONS_UPDATE', 'FEATURE_PERMISSIONS_DELETE'];
        this.serviceName = ['FEATURE_PERMISSIONS_SERVICE', 'FEATURE_PERMISSIONS_SERVICE', 'FEATURE_PERMISSIONS_SERVICE'];
    }
    onModuleInit() {
        for (var i = 0; i < this.topicArray.length; i++) {
            this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
                let value = this.topicArray[i];
                return async (result) => {
                    console.log("Result is........" + JSON.stringify(result));
                    try {
                        let responseModelOfFeature_PermissionsDto = null;
                        console.log(`listening to  ${value} topic.....result is....`);
                        switch (value) {
                            case 'FEATURE_PERMISSIONS_ADD':
                                console.log("Inside FEATURE_PERMISSIONS_ADD Topic");
                                responseModelOfFeature_PermissionsDto = await this.createFeaturePermissions(result["message"]);
                                break;
                            case 'FEATURE_PERMISSIONS_UPDATE':
                                console.log("Inside FEATURE_PERMISSIONS_UPDATE Topic");
                                responseModelOfFeature_PermissionsDto = await this.updateFeaturePermissions(result["message"]);
                                break;
                            case 'FEATURE_PERMISSIONS_DELETE':
                                console.log("Inside FEATURE_PERMISSIONS_DELETE Topic");
                                responseModelOfFeature_PermissionsDto = await this.deleteFeaturePermissions(result["message"]);
                                break;
                        }
                        console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
                        let requestModelOfFeature_PermissionsDto = result["message"];
                        responseModelOfFeature_PermissionsDto.setSocketId(requestModelOfFeature_PermissionsDto.SocketId);
                        responseModelOfFeature_PermissionsDto.setCommunityUrl(requestModelOfFeature_PermissionsDto.CommunityUrl);
                        responseModelOfFeature_PermissionsDto.setRequestId(requestModelOfFeature_PermissionsDto.RequestGuid);
                        responseModelOfFeature_PermissionsDto.setStatus(new Message_1.Message("200", "Group Inserted Successfully", null));
                        for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
                            const element = result.OnSuccessTopicsToPush[index];
                            console.log("ELEMENT: ", JSON.stringify(responseModelOfFeature_PermissionsDto));
                            this.sns_sqs.publishMessageToTopic(element, responseModelOfFeature_PermissionsDto);
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
    allFeaturePermissions() {
        try {
            return this.feature_permissionsFacade.getAll();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createFeaturePermissions(body) {
        try {
            let result = await this.feature_permissionsFacade.create(body);
            return result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateFeaturePermissions(body) {
        try {
            console.log("Executing update query..............");
            return await this.feature_permissionsFacade.update(body);
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    deleteFeaturePermissions(body) {
        try {
            return this.feature_permissionsFacade.deleteById(body);
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
], Feature_PermissionsRoutes.prototype, "allFeaturePermissions", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], Feature_PermissionsRoutes.prototype, "createFeaturePermissions", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], Feature_PermissionsRoutes.prototype, "updateFeaturePermissions", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], Feature_PermissionsRoutes.prototype, "deleteFeaturePermissions", null);
Feature_PermissionsRoutes = __decorate([
    common_1.Controller('feature_permissions'),
    __metadata("design:paramtypes", [feature_permissions_facade_1.Feature_PermissionsFacade])
], Feature_PermissionsRoutes);
exports.Feature_PermissionsRoutes = Feature_PermissionsRoutes;
//# sourceMappingURL=feature_permissions.route.js.map