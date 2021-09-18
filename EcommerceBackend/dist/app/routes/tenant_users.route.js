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
exports.Tenant_UsersRoutes = void 0;
const common_1 = require("@nestjs/common");
const tenant_users_facade_1 = require("../facade/tenant_users.facade");
const ResponseModel_1 = require("../../submodules/Portfolio-Platform-Common/ResponseModel");
const SNS_SQS_1 = require("../../submodules/Portfolio-Platform-RabbitMQConfig/SNS_SQS");
const RequestModel_1 = require("../../submodules/Portfolio-Platform-Common/RequestModel");
const Message_1 = require("../../submodules/Portfolio-Platform-Common/Message");
let Tenant_UsersRoutes = class Tenant_UsersRoutes {
    constructor(tenant_usersFacade) {
        this.tenant_usersFacade = tenant_usersFacade;
        this.sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
        this.topicArray = ['TENANT_USERS_ADD', 'TENANT_USERS_UPDATE', 'TENANT_USERS_DELETE'];
        this.serviceName = ['TENANT_USERS_SERVICE', 'TENANT_USERS_SERVICE', 'TENANT_USERS_SERVICE'];
    }
    onModuleInit() {
        for (var i = 0; i < this.topicArray.length; i++) {
            this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
                let value = this.topicArray[i];
                return async (result) => {
                    console.log("Result is........" + JSON.stringify(result));
                    try {
                        let responseModelOfTenant_UsersDto = null;
                        console.log(`listening to  ${value} topic.....result is....`);
                        switch (value) {
                            case 'TENANT_USERS_ADD':
                                console.log("Inside TENANT_USERS_ADD Topic");
                                responseModelOfTenant_UsersDto = await this.createTenantUsers(result["message"]);
                                break;
                            case 'TENANT_USERS_UPDATE':
                                console.log("Inside TENANT_USERS_UPDATE Topic");
                                responseModelOfTenant_UsersDto = await this.updateTenantUsers(result["message"]);
                                break;
                            case 'TENANT_USERS_DELETE':
                                console.log("Inside TENANT_USERS_DELETE Topic");
                                responseModelOfTenant_UsersDto = await this.deleteTenantUsers(result["message"]);
                                break;
                        }
                        console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
                        let requestModelOfTenant_UsersDto = result["message"];
                        responseModelOfTenant_UsersDto.setSocketId(requestModelOfTenant_UsersDto.SocketId);
                        responseModelOfTenant_UsersDto.setCommunityUrl(requestModelOfTenant_UsersDto.CommunityUrl);
                        responseModelOfTenant_UsersDto.setRequestId(requestModelOfTenant_UsersDto.RequestGuid);
                        responseModelOfTenant_UsersDto.setStatus(new Message_1.Message("200", "Group Inserted Successfully", null));
                        for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
                            const element = result.OnSuccessTopicsToPush[index];
                            console.log("ELEMENT: ", JSON.stringify(responseModelOfTenant_UsersDto));
                            this.sns_sqs.publishMessageToTopic(element, responseModelOfTenant_UsersDto);
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
    allTenantUsers() {
        try {
            return this.tenant_usersFacade.getAll();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createTenantUsers(body) {
        try {
            let result = await this.tenant_usersFacade.create(body);
            return result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateTenantUsers(body) {
        try {
            console.log("Executing update query..............");
            return await this.tenant_usersFacade.update(body);
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    deleteTenantUsers(body) {
        try {
            return this.tenant_usersFacade.deleteById(body);
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
], Tenant_UsersRoutes.prototype, "allTenantUsers", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], Tenant_UsersRoutes.prototype, "createTenantUsers", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], Tenant_UsersRoutes.prototype, "updateTenantUsers", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], Tenant_UsersRoutes.prototype, "deleteTenantUsers", null);
Tenant_UsersRoutes = __decorate([
    common_1.Controller('tenant_users'),
    __metadata("design:paramtypes", [tenant_users_facade_1.Tenant_UsersFacade])
], Tenant_UsersRoutes);
exports.Tenant_UsersRoutes = Tenant_UsersRoutes;
//# sourceMappingURL=tenant_users.route.js.map