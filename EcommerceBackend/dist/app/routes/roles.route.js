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
exports.RolesRoutes = void 0;
const common_1 = require("@nestjs/common");
const roles_facade_1 = require("../facade/roles.facade");
const ResponseModel_1 = require("../../submodules/Portfolio-Platform-Common/ResponseModel");
const SNS_SQS_1 = require("../../submodules/Portfolio-Platform-RabbitMQConfig/SNS_SQS");
const RequestModel_1 = require("../../submodules/Portfolio-Platform-Common/RequestModel");
const Message_1 = require("../../submodules/Portfolio-Platform-Common/Message");
let RolesRoutes = class RolesRoutes {
    constructor(rolesFacade) {
        this.rolesFacade = rolesFacade;
        this.sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
        this.topicArray = ['ROLES_ADD', 'ROLES_UPDATE', 'ROLES_DELETE'];
        this.serviceName = ['ROLES_SERVICE', 'ROLES_SERVICE', 'ROLES_SERVICE'];
    }
    onModuleInit() {
        for (var i = 0; i < this.topicArray.length; i++) {
            this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
                let value = this.topicArray[i];
                return async (result) => {
                    console.log("Result is........" + JSON.stringify(result));
                    try {
                        let responseModelOfRolesDto = null;
                        console.log(`listening to  ${value} topic.....result is....`);
                        switch (value) {
                            case 'ROLES_ADD':
                                console.log("Inside ROLES_ADD Topic");
                                responseModelOfRolesDto = await this.createRoles(result["message"]);
                                break;
                            case 'ROLES_UPDATE':
                                console.log("Inside ROLES_UPDATE Topic");
                                responseModelOfRolesDto = await this.updateRoles(result["message"]);
                                break;
                            case 'ROLES_DELETE':
                                console.log("Inside ROLES_DELETE Topic");
                                responseModelOfRolesDto = await this.deleteRoles(result["message"]);
                                break;
                        }
                        console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
                        let requestModelOfRolesDto = result["message"];
                        responseModelOfRolesDto.setSocketId(requestModelOfRolesDto.SocketId);
                        responseModelOfRolesDto.setCommunityUrl(requestModelOfRolesDto.CommunityUrl);
                        responseModelOfRolesDto.setRequestId(requestModelOfRolesDto.RequestGuid);
                        responseModelOfRolesDto.setStatus(new Message_1.Message("200", "Group Inserted Successfully", null));
                        for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
                            const element = result.OnSuccessTopicsToPush[index];
                            console.log("ELEMENT: ", JSON.stringify(responseModelOfRolesDto));
                            this.sns_sqs.publishMessageToTopic(element, responseModelOfRolesDto);
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
    allRoles() {
        try {
            return this.rolesFacade.getAll();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createRoles(body) {
        try {
            let result = await this.rolesFacade.create(body);
            return result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateRoles(body) {
        try {
            console.log("Executing update query..............");
            return await this.rolesFacade.update(body);
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    deleteRoles(body) {
        try {
            return this.rolesFacade.deleteById(body);
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
], RolesRoutes.prototype, "allRoles", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], RolesRoutes.prototype, "createRoles", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], RolesRoutes.prototype, "updateRoles", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof RequestModel_1.RequestModel !== "undefined" && RequestModel_1.RequestModel) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], RolesRoutes.prototype, "deleteRoles", null);
RolesRoutes = __decorate([
    common_1.Controller('roles'),
    __metadata("design:paramtypes", [roles_facade_1.RolesFacade])
], RolesRoutes);
exports.RolesRoutes = RolesRoutes;
//# sourceMappingURL=roles.route.js.map