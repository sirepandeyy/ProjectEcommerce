import { CartFacade } from './../facade/cartFacade';
import { CartDto } from './../../submodules/Ecommerce-Platform-Dtos/cart';
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


@Controller('carts')
export class CartRoutes{

  constructor(private cartFacade :CartFacade ) { }

  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['CARTS_ADD','CARTS_UPDATE','CARTS_DELETE'];
  private serviceName = ['CARTS_SERVICE','CARTS_SERVICE','CARTS_SERVICE'];
  
  onModuleInit() {
   
    for (var i = 0; i < this.topicArray.length; i++) {
      this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
        let value = this.topicArray[i];
        return async (result) => {
          console.log("Result is........" + JSON.stringify(result));
          try {
            let responseModelOfCartDto: ResponseModel<CartDto> = null;
            console.log(`listening to  ${value} topic.....result is....`);
            // ToDo :- add a method for removing queue message from queue....
            switch (value) {
              case 'CARTS_ADD':
                console.log("Inside CARTS_ADD Topic");
                responseModelOfCartDto = await this.createCart(result["message"]);
                break;
              case 'CARTS_UPDATE':
                  console.log("Inside CARTS_UPDATE Topic");
                  responseModelOfCartDto = await this.updateCart(result["message"]);
                  break;
              case 'CARTS_DELETE':
                    console.log("Inside CARTS_DELETE Topic");
                    responseModelOfCartDto = await this.deleteCart(result["message"]);
                    break;
  
            }
  
            console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
            let requestModelOfCartDto: RequestModel<CartDto> = result["message"];
            responseModelOfCartDto.setSocketId(requestModelOfCartDto.SocketId)
            responseModelOfCartDto.setCommunityUrl(requestModelOfCartDto.CommunityUrl);
            responseModelOfCartDto.setRequestId(requestModelOfCartDto.RequestGuid);
            responseModelOfCartDto.setStatus(new Message("200", "Group Inserted Successfully", null));

            for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
              const element = result.OnSuccessTopicsToPush[index];
              console.log("ELEMENT: ", JSON.stringify(responseModelOfCartDto));
              this.sns_sqs.publishMessageToTopic(element, responseModelOfCartDto)
            }
          }
          catch (error) {
            console.log("Inside Catch.........");
            console.log(error, result);
            for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
              const element = result.OnFailureTopicsToPush[index];
              let errorResult: ResponseModel<CartDto> = new ResponseModel<CartDto>(null,null,null,null,null,null,null,null,null);;
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
 
      return this.cartFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post("/") 
  async createCart(@Body() body:RequestModel<CartDto>): Promise<ResponseModel<CartDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {

      let result = await this.cartFacade.create(body);
   
      return result;
      // return null;
    } catch (error) {
       console.log("Error is....." + error);
       throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put("/")
  async updateCart(@Body() body: RequestModel<CartDto>): Promise<ResponseModel<CartDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {

      console.log("Executing update query..............")
      return await this.cartFacade.update(body);
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/')
  deleteCart(@Body() body:RequestModel<CartDto>): Promise<ResponseModel<CartDto>>{
    try {

      return this.cartFacade.deleteById(body);
        } catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
  }

}