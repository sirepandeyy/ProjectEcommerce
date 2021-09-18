import { ProductDto } from './../../submodules/Ecommerce-Platform-Dtos/productDto';
import { ProductFacade } from './../facade/productFacade';
import { RoleFacade } from './../facade/roleFacade';
import { RoleDto } from './../../submodules/Ecommerce-Platform-Dtos/roleDto';
import { UserDto } from './../../submodules/Ecommerce-Platform-Dtos/usersDto';
import { Body,Query, Controller, Delete, Get, HttpException, HttpStatus, Inject, Injectable, Param, Patch, Post, Put, Req } from '@nestjs/common';

import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';

import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
import { Message } from '../../submodules/Ecommerce-Platform-Common/Message';
import { SNS_SQS } from 'submodules/Ecommerce-Platform-RabbitMQConfig/SNS_SQS';
import { UsersFacade } from 'app/facade/usersFacade';


@Controller('products')
export class ProductRoutes{

  constructor(private productFacade : ProductFacade) { }

  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['PRODUCTS_ADD','PRODUCTS_UPDATE','PRODUCTS_DELETE'];
  private serviceName = ['PRODUCTS_SERVICE','PRODUCTS_SERVICE','PRODUCTS_SERVICE'];
  
  onModuleInit() {
   
    for (var i = 0; i < this.topicArray.length; i++) {
      this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
        let value = this.topicArray[i];
        return async (result) => {
          console.log("Result is........" + JSON.stringify(result));
          try {
            let responseModelOfProductDto: ResponseModel<ProductDto> = null;
            console.log(`listening to  ${value} topic.....result is....`);
            // ToDo :- add a method for removing queue message from queue....
            switch (value) {
              case 'PRODUCTS_ADD':
                console.log("Inside PRODUCTS_ADD Topic");
                responseModelOfProductDto = await this.createProduct(result["message"]);
                break;
              case 'PRODUCTS_UPDATE':
                  console.log("Inside PRODUCTS_UPDATE Topic");
                  responseModelOfProductDto = await this.updateProduct(result["message"]);
                  break;
              case 'PRODUCTS_DELETE':
                    console.log("Inside PRODUCTS_DELETE Topic");
                    responseModelOfProductDto = await this.deleteProduct(result["message"]);
                    break;
  
            }
  
            console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
            let requestModelOfProductDto: RequestModel<ProductDto> = result["message"];
            responseModelOfProductDto.setSocketId(requestModelOfProductDto.SocketId)
            responseModelOfProductDto.setCommunityUrl(requestModelOfProductDto.CommunityUrl);
            responseModelOfProductDto.setRequestId(requestModelOfProductDto.RequestGuid);
            responseModelOfProductDto.setStatus(new Message("200", "Group Inserted Successfully", null));

            for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
              const element = result.OnSuccessTopicsToPush[index];
              console.log("ELEMENT: ", JSON.stringify(responseModelOfProductDto));
              this.sns_sqs.publishMessageToTopic(element, responseModelOfProductDto)
            }
          }
          catch (error) {
            console.log("Inside Catch.........");
            console.log(error, result);
            for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
              const element = result.OnFailureTopicsToPush[index];
              let errorResult: ResponseModel<ProductDto> = new ResponseModel<ProductDto>(null,null,null,null,null,null,null,null,null);;
              errorResult.setStatus(new Message("500",error,null))
              

              this.sns_sqs.publishMessageToTopic(element, errorResult);
            }
          }
        }
      })())
    }

  }


  @Get()
  allUsers() {
    try {
 
      return this.productFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


   @Get(':id')
    productById(@Param('id') id: number): Promise<ResponseModel<ProductDto>> {
    try {
      console.log("id is............." + JSON.stringify(id));
      return this.productFacade.getByIds([id]);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post("/") 
  async createProduct(@Body() body:RequestModel<ProductDto>): Promise<ResponseModel<ProductDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {

      let result = await this.productFacade.create(body);
   
      return result;
      // return null;
    } catch (error) {
       console.log("Error is....." + error);
       throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put("/")
  async updateProduct(@Body() body: RequestModel<ProductDto>): Promise<ResponseModel<ProductDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {

      console.log("Executing update query..............")
      return await this.productFacade.update(body);
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/')
  deleteProduct(@Body() body:RequestModel<ProductDto>): Promise<ResponseModel<ProductDto>>{
    try {

      return this.productFacade.deleteById(body);
        } catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
  }

}