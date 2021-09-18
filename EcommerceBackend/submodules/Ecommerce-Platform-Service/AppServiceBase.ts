import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { ClassType } from "class-transformer/ClassTransformer";
import { ResponseModel } from "../Ecommerce-Platform-Common/ResponseModel";
import { ServiceOperationResultType } from "../Ecommerce-Platform-Common/ServiceOperationResultType";
import { Brackets, createConnection, EntitySchema, getRepository, ObjectType, Repository, SelectQueryBuilder } from "typeorm";

import { RequestModel } from "../Ecommerce-Platform-Common/RequestModel";
import { plainToClass } from "class-transformer";
import { HttpService } from "@nestjs/common";
import { map } from 'rxjs/operators';
import { EntityBase } from "submodules/Ecommerce-Platform-Entities/EntityBase/entitybase";
import { DtoBase } from "submodules/Ecommerce-Platform-Dtos/DtoBase/dtobase";
import { SNS_SQS } from "submodules/Ecommerce-Platform-RabbitMQConfig/SNS_SQS";
// import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_TYPE, DATABASE_USERNAME, GROUP_MICROSERVICE_URI } from '../../../config';

// import { IPaginationOptions } from "nestjs-typeorm-paginate";
// const config = require("../../../config")
const objectMapper = require('object-mapper');
var pluralize = require('pluralize')
var LRU = require("lru-cache")
  , options = {
    max: 500
    , length: function (n, key) { return n * 2 + key.length }
    , dispose: function (key, n) { n.close() }
    , maxAge: 1000 * 60 * 60
  }
  , cache = new LRU(options)
  , otherCache = new LRU(100) // sets just the max size

@Injectable()
export default class AppService<TEntity extends EntityBase, TDto extends DtoBase>{

  private entityMap = {};
  private dtoMap = {};

  private entityToDtoMap = {};

  private dtoToEntitymap = {};
  private dict = {};
  public sns_sqs = SNS_SQS.getInstance();


  constructor(public http: HttpService, public readonly genericRepository: Repository<TEntity>, private type3: ObjectType<TEntity>, private entityClassType: ClassType<TEntity>, private dtoClassType: ClassType<TDto>, entityMap: Record<string, unknown>, dtoMap: Record<string, unknown>, entityToDtoMap: Record<string, unknown>, dtoToEntityMap: Record<string, unknown>) {
    this.entityMap = entityMap;
    this.dtoMap = dtoMap;
    this.entityToDtoMap = entityToDtoMap;
    this.dtoToEntitymap = dtoToEntityMap;
    // this.sns_sqs = SNS_SQS.getInstance();

  }


  addDtoMap(map: Record<string, unknown>) {
    this.entityMap = map;
  }
  addEntityMap(map: Record<string, unknown>) {
    this.dtoMap = map;
  }

  addEntityToDtoMap(map: Record<string, unknown>) {
    this.entityToDtoMap = map;
  }

  addDtoToEntityMap(map: Record<string, unknown>) {
    this.dtoToEntitymap = map;
  }

  async mapToDto(entities: TEntity[]): Promise<TDto[]> {
    try {
      let result: TDto[] = [];
      let dto: TDto;
      Promise.all(entities.map(async (entity: TEntity) => {
        await result.push(plainToClass(this.dtoClassType, objectMapper(entity, this.entityToDtoMap)))
      }))

      return result;
    }
    catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  async mapToEntity(dtos: TDto[]): Promise<TEntity[]> {
    try {
      let result: TEntity[] = [];
      let entity: TEntity;

      Promise.all(dtos.map(async (dto: TDto) => {
        await result.push(plainToClass(this.entityClassType, objectMapper(dto, this.entityToDtoMap)))
      }))


      return result;
    }
    catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Not yet in use(not sure)
  async getAll(): Promise<ResponseModel<TDto>> {
    try {
      let result = await this.genericRepository.find({
        // take: limit,
        // skip: limit * (page - 1),
      });
      let final_result: ResponseModel<TDto> = new ResponseModel("123", null, null, "123", "123", "gft", null, null, null);
      console.log("result is....." + JSON.stringify(result));
      final_result.setDataCollection(await this.mapToDto(result));
      return final_result;
    }
    catch (error) {
      console.log("Error is....." + error);
      // throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      throw new Error(error);
    }
  }

 
  //creates new entry in database of given entity  
  async create(entity: RequestModel<TDto>): Promise<ResponseModel<TDto>> {
    try {
      await console.log("Inside insert of generic repository...entity is...." + JSON.stringify(entity));
      var result: TDto[] = [];

      let result1: any;
      //entity
      let requestGuid = entity.RequestGuid;
      let socketId = entity.SocketId;

      //Add implicit filter toeach record in the dataCollection via Filters.
      //----------------------------------------------------------------
      /*
      {
        "field1":"ssome value",
        "community_id"= <community_id from cache/request object> only if the property has community_id
        //This has to be level wise, for level 1 you will get it directly
        //Here we are adding implicit filter for every record that goes inside the DB
      }

      */

      // let final_result: ResponseModel<TDto> = new ResponseModel(entity.RequestGuid,entity.SocketId, null, null, "123", "123", "gft", null);

      await Promise.all(entity.DataCollection.map(async (entity_sample) => {
        // console.log("Entity sample is......" + JSON.stringify(entity_sample));
        console.log("Map is......" + JSON.stringify(this.entityMap));
        // console.log("result....." + objectMapper(entity_sample, this.entityMap));
  
      
        // result1 = await this.genericRepository.save(objectMapper(entity_sample, this.entityMap))
        result1 = await this.genericRepository.createQueryBuilder().insert()
          .values(objectMapper(entity_sample, this.entityMap))
          .returning('*')
          .execute()
        console.log("result is......." + JSON.stringify(result1));
        // result1 = await this.genericRepository.save(entity_sample)

        await result.push(result1.generatedMaps[0])
        await console.log("present result is......" + JSON.stringify(result));
      })
      );
      console.log("Returning result1....." + JSON.stringify(result));
      // result.forEach((entity:TEntity)=>)
      // let successResponseModel = ResponseModel<TDto>
      let final_result: ResponseModel<TDto> = new ResponseModel(entity.RequestGuid, null, ServiceOperationResultType.success, "200", null, null, null, entity.SocketId, entity.CommunityUrl)
      final_result.setDataCollection(result);
      final_result.setSocketId(entity.SocketId);
      return final_result;


    }
    catch (error) {
      console.log("Error occured while inserting entity....." + error);
      let final_result: ResponseModel<TDto> = new ResponseModel(entity.RequestGuid, null, ServiceOperationResultType.error, "500", error, null, null, entity.SocketId, entity.CommunityUrl)

      throw new HttpException(final_result, HttpStatus.INTERNAL_SERVER_ERROR);
    };

  }

  async updateEntity(dtos: RequestModel<TDto>): Promise<ResponseModel<TDto>> {
    try {
      await console.log("Inside update of generic repository...entity is...." + JSON.stringify(dtos));
      var result: TDto[] = [];
      var ids: number[] = [];
      let result1: any;
      var result2: any;
      var entities: TEntity[] = [];
      await Promise.all(dtos.DataCollection.map(async (dto_sample: any) => {
        console.log("Entity sample is......" + JSON.stringify(dto_sample));
        console.log("Map is......" + JSON.stringify(this.entityMap));
        console.log("result....." + JSON.stringify(objectMapper(dto_sample, this.entityMap)));
        await entities.push(objectMapper(dto_sample, this.entityMap));
        result1 = await this.genericRepository.update(dto_sample.Id, dto_sample);
        // result2 = await this.genericRepository.merge()
        // const entity = await this.genericRepository.findOne(dto_sample.Id);
        // result1 = this.genericRepository.save(id:dto_sample.id, ...dto_sample);
        await result.push(result1);
        console.log("result is......." + JSON.stringify(result1));
        await console.log("present result is......" + JSON.stringify(result));
      })
      );
      let final_result: ResponseModel<TDto> = new ResponseModel(dtos.RequestGuid, null, ServiceOperationResultType.success, "200", null, null, null, dtos.SocketId, dtos.CommunityUrl)
      final_result.setDataCollection(dtos.DataCollection);
      return final_result;

    }
    catch (err) {
      let final_result: ResponseModel<TDto> = new ResponseModel(dtos.RequestGuid, null, ServiceOperationResultType.failure, "500", err, null, [err], dtos.SocketId, dtos.CommunityUrl)
      final_result.setDataCollection(dtos.DataCollection);
      final_result.setMessage("500", err)
      // console.log(err)
      throw new HttpException(final_result, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteById(ids: any[]): Promise<ResponseModel<TDto>> {
    const entities = await this.getByIds(ids);
    console.log("Entites to be deleted are......" + JSON.stringify(entities));

    if (entities.getDataCollection().length != 0) {
      let result = await this.mapToEntity(entities.getDataCollection());
      console.log("Result is....." + JSON.stringify(result));
      await this.genericRepository.remove(result);
      console.log("delete ok")
      // await this.genericRepository.delete()
      let final_result: ResponseModel<TDto> = new ResponseModel(null, null, null, "200", null, null, null, null, null)

      final_result.setDataCollection(entities.getDataCollection())
      return final_result;
    }
    // return await this.genericRepository.remove(ids)
    throw new HttpException("No such id found ", HttpStatus.NOT_FOUND);
  }

  async getByIds(id: any[]): Promise<ResponseModel<TDto>> {
    try {
      let final_result: ResponseModel<TDto> = new ResponseModel("123", null, null, "123", "123", "gft", null, null, null);
      console.log("ids...." + JSON.stringify(id));
      final_result.setDataCollection(await this.mapToDto(await this.genericRepository.findByIds(id)))
      return final_result;
    }
    catch (error) {
      console.log("Error is....." + error);
      // throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      throw new Error(error);
    }

  }

  //   paginate(options: IPaginationOptions) {

  //     // return from(paginate<ProductDto>(this.productRepository, options)).pipe(
  //     //     map((productsPageable: Pagination<ProductDto>) => {
  //     //         // productsPageable.items.forEach(function (v) {console.log(v)});

  //     //         return productsPageable;
  //     //     })
  //     // )

  //     return this.paginate<ProductDto>(this.productRepository, options)

  // }

}