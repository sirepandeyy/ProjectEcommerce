import { OrderItemDto } from './../../submodules/Ecommerce-Platform-Dtos/orderItemDto';
import { OrderItemFacade } from './../facade/orderItemfacade';
import { OrderDto } from '../../submodules/Ecommerce-Platform-Dtos/order';
import { Body,Query, Controller, Delete, Get, HttpException, HttpStatus, Inject, Injectable, Param, Patch, Post, Put, Req } from '@nestjs/common';

import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';

import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
import { Message } from '../../submodules/Ecommerce-Platform-Common/Message';
import { SNS_SQS } from 'submodules/Ecommerce-Platform-RabbitMQConfig/SNS_SQS';
import { UsersFacade } from 'app/facade/usersFacade';


@Controller('order_items')
export class OrderItemRoutes{

  constructor(private OrderItemFacade : OrderItemFacade) { }

  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['ORDER_ITEMS_ADD','ORDER_ITEMS_UPDATE','ORDER_ITEMS_DELETE'];
  private serviceName = ['ORDER_ITEMS_SERVICE','ORDER_ITEMS_SERVICE','ORDER_ITEMS_SERVICE'];
  
  onModuleInit() {
   
    for (var i = 0; i < this.topicArray.length; i++) {
      this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
        let value = this.topicArray[i];
        return async (result) => {
          console.log("Result is........" + JSON.stringify(result));
          try {
            let responseModelOfOrderItemDto: ResponseModel<OrderItemDto> = null;
            console.log(`listening to  ${value} topic.....result is....`);
            // ToDo :- add a method for removing queue message from queue....
            switch (value) {
               case 'ORDER_ITEMS_ADD':
                 console.log("Inside ORDER_ITEMS_ADD Topic");
                 responseModelOfOrderItemDto = await this.createOrderItem(result["message"]);
                 break;
               case 'ORDER_ITEMS_UPDATE':
                   console.log("Inside ORDER_ITEMS_UPDATE Topic");
                   responseModelOfOrderItemDto = await this.updateOrderItem(result["message"]);
                   break;
               case 'ORDER_ITEMS_DELETE':
                     console.log("Inside ORDER_ITEMS_DELETE Topic");
                     responseModelOfOrderItemDto = await this.deleteOrderItem(result["message"]);
                     break;
  
            }
  
            console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
            let requestModelOfOrderItemDto: RequestModel<OrderItemDto> = result["message"];
            responseModelOfOrderItemDto.setSocketId(requestModelOfOrderItemDto.SocketId)
            responseModelOfOrderItemDto.setCommunityUrl(requestModelOfOrderItemDto.CommunityUrl);
            responseModelOfOrderItemDto.setRequestId(requestModelOfOrderItemDto.RequestGuid);
            responseModelOfOrderItemDto.setStatus(new Message("200", "Group Inserted Successfully", null));

            for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
              const element = result.OnSuccessTopicsToPush[index];
              console.log("ELEMENT: ", JSON.stringify(responseModelOfOrderItemDto));
              this.sns_sqs.publishMessageToTopic(element, responseModelOfOrderItemDto)
            }
          }
          catch (error) {
            console.log("Inside Catch.........");
            console.log(error, result);
            for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
              const element = result.OnFailureTopicsToPush[index];
              let errorResult: ResponseModel<OrderItemDto> = new ResponseModel<OrderItemDto>(null,null,null,null,null,null,null,null,null);;
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
 
      return this.OrderItemFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

 @Post("/") 
 async createOrderItem(@Body() body:RequestModel<OrderItemDto>): Promise<ResponseModel<OrderItemDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
   try {

     let result = await this.OrderItemFacade.create(body);
   
     return result;
     // return null;
   } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
   }
 }

 @Put("/")
 async updateOrderItem(@Body() body: RequestModel<OrderItemDto>): Promise<ResponseModel<OrderItemDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
   try {

     console.log("Executing update query..............")
     return await this.OrderItemFacade.update(body);
   } catch (error) {
     console.log("Error is....." + error);
     throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
   }
 }

 @Delete('/')
 deleteOrderItem(@Body() body:RequestModel<OrderItemDto>): Promise<ResponseModel<OrderItemDto>>{
   try {

     return this.OrderItemFacade.deleteById(body);
       } catch (error) {
         throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
       }
 }

}