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
Object.defineProperty(exports, "__esModule", { value: true });
const injectable_decorator_1 = require("@nestjs/common/decorators/core/injectable.decorator");
const http_status_enum_1 = require("@nestjs/common/enums/http-status.enum");
const http_exception_1 = require("@nestjs/common/exceptions/http.exception");
const ResponseModel_1 = require("../Ecommerce-Platform-Common/ResponseModel");
const ServiceOperationResultType_1 = require("../Ecommerce-Platform-Common/ServiceOperationResultType");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const common_1 = require("@nestjs/common");
const entitybase_1 = require("../Ecommerce-Platform-Entities/EntityBase/entitybase");
const dtobase_1 = require("../Ecommerce-Platform-Dtos/DtoBase/dtobase");
const SNS_SQS_1 = require("../Ecommerce-Platform-RabbitMQConfig/SNS_SQS");
const objectMapper = require('object-mapper');
var pluralize = require('pluralize');
var LRU = require("lru-cache"), options = {
    max: 500,
    length: function (n, key) { return n * 2 + key.length; },
    dispose: function (key, n) { n.close(); },
    maxAge: 1000 * 60 * 60
}, cache = new LRU(options), otherCache = new LRU(100);
let AppService = class AppService {
    constructor(http, genericRepository, type3, entityClassType, dtoClassType, entityMap, dtoMap, entityToDtoMap, dtoToEntityMap) {
        this.http = http;
        this.genericRepository = genericRepository;
        this.type3 = type3;
        this.entityClassType = entityClassType;
        this.dtoClassType = dtoClassType;
        this.entityMap = {};
        this.dtoMap = {};
        this.entityToDtoMap = {};
        this.dtoToEntitymap = {};
        this.dict = {};
        this.sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
        this.entityMap = entityMap;
        this.dtoMap = dtoMap;
        this.entityToDtoMap = entityToDtoMap;
        this.dtoToEntitymap = dtoToEntityMap;
    }
    addDtoMap(map) {
        this.entityMap = map;
    }
    addEntityMap(map) {
        this.dtoMap = map;
    }
    addEntityToDtoMap(map) {
        this.entityToDtoMap = map;
    }
    addDtoToEntityMap(map) {
        this.dtoToEntitymap = map;
    }
    async mapToDto(entities) {
        try {
            let result = [];
            let dto;
            Promise.all(entities.map(async (entity) => {
                await result.push(class_transformer_1.plainToClass(this.dtoClassType, objectMapper(entity, this.entityToDtoMap)));
            }));
            return result;
        }
        catch (error) {
            throw new http_exception_1.HttpException(error, http_status_enum_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async mapToEntity(dtos) {
        try {
            let result = [];
            let entity;
            Promise.all(dtos.map(async (dto) => {
                await result.push(class_transformer_1.plainToClass(this.entityClassType, objectMapper(dto, this.entityToDtoMap)));
            }));
            return result;
        }
        catch (error) {
            throw new http_exception_1.HttpException(error, http_status_enum_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAll() {
        try {
            let result = await this.genericRepository.find({});
            let final_result = new ResponseModel_1.ResponseModel("123", null, null, "123", "123", "gft", null, null, null);
            console.log("result is....." + JSON.stringify(result));
            final_result.setDataCollection(await this.mapToDto(result));
            return final_result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new Error(error);
        }
    }
    async create(entity) {
        try {
            await console.log("Inside insert of generic repository...entity is...." + JSON.stringify(entity));
            var result = [];
            let result1;
            let requestGuid = entity.RequestGuid;
            let socketId = entity.SocketId;
            await Promise.all(entity.DataCollection.map(async (entity_sample) => {
                console.log("Map is......" + JSON.stringify(this.entityMap));
                result1 = await this.genericRepository.createQueryBuilder().insert()
                    .values(objectMapper(entity_sample, this.entityMap))
                    .returning('*')
                    .execute();
                console.log("result is......." + JSON.stringify(result1));
                await result.push(result1.generatedMaps[0]);
                await console.log("present result is......" + JSON.stringify(result));
            }));
            console.log("Returning result1....." + JSON.stringify(result));
            let final_result = new ResponseModel_1.ResponseModel(entity.RequestGuid, null, ServiceOperationResultType_1.ServiceOperationResultType.success, "200", null, null, null, entity.SocketId, entity.CommunityUrl);
            final_result.setDataCollection(result);
            final_result.setSocketId(entity.SocketId);
            return final_result;
        }
        catch (error) {
            console.log("Error occured while inserting entity....." + error);
            let final_result = new ResponseModel_1.ResponseModel(entity.RequestGuid, null, ServiceOperationResultType_1.ServiceOperationResultType.error, "500", error, null, null, entity.SocketId, entity.CommunityUrl);
            throw new http_exception_1.HttpException(final_result, http_status_enum_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        ;
    }
    async updateEntity(dtos) {
        try {
            await console.log("Inside update of generic repository...entity is...." + JSON.stringify(dtos));
            var result = [];
            var ids = [];
            let result1;
            var result2;
            var entities = [];
            await Promise.all(dtos.DataCollection.map(async (dto_sample) => {
                console.log("Entity sample is......" + JSON.stringify(dto_sample));
                console.log("Map is......" + JSON.stringify(this.entityMap));
                console.log("result....." + JSON.stringify(objectMapper(dto_sample, this.entityMap)));
                await entities.push(objectMapper(dto_sample, this.entityMap));
                result1 = await this.genericRepository.update(dto_sample.Id, dto_sample);
                await result.push(result1);
                console.log("result is......." + JSON.stringify(result1));
                await console.log("present result is......" + JSON.stringify(result));
            }));
            let final_result = new ResponseModel_1.ResponseModel(dtos.RequestGuid, null, ServiceOperationResultType_1.ServiceOperationResultType.success, "200", null, null, null, dtos.SocketId, dtos.CommunityUrl);
            final_result.setDataCollection(dtos.DataCollection);
            return final_result;
        }
        catch (err) {
            let final_result = new ResponseModel_1.ResponseModel(dtos.RequestGuid, null, ServiceOperationResultType_1.ServiceOperationResultType.failure, "500", err, null, [err], dtos.SocketId, dtos.CommunityUrl);
            final_result.setDataCollection(dtos.DataCollection);
            final_result.setMessage("500", err);
            throw new http_exception_1.HttpException(final_result, http_status_enum_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteById(ids) {
        const entities = await this.getByIds(ids);
        console.log("Entites to be deleted are......" + JSON.stringify(entities));
        if (entities.getDataCollection().length != 0) {
            let result = await this.mapToEntity(entities.getDataCollection());
            console.log("Result is....." + JSON.stringify(result));
            await this.genericRepository.remove(result);
            console.log("delete ok");
            let final_result = new ResponseModel_1.ResponseModel(null, null, null, "200", null, null, null, null, null);
            final_result.setDataCollection(entities.getDataCollection());
            return final_result;
        }
        throw new http_exception_1.HttpException("No such id found ", http_status_enum_1.HttpStatus.NOT_FOUND);
    }
    async getByIds(id) {
        try {
            let final_result = new ResponseModel_1.ResponseModel("123", null, null, "123", "123", "gft", null, null, null);
            console.log("ids...." + JSON.stringify(id));
            final_result.setDataCollection(await this.mapToDto(await this.genericRepository.findByIds(id)));
            return final_result;
        }
        catch (error) {
            console.log("Error is....." + error);
            throw new Error(error);
        }
    }
};
AppService = __decorate([
    injectable_decorator_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService, typeorm_1.Repository, Object, Object, Object, Object, Object, Object, Object])
], AppService);
exports.default = AppService;
//# sourceMappingURL=AppServiceBase.js.map