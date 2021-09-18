import { OrderDto } from './../../submodules/Ecommerce-Platform-Dtos/order';
import { OrderFacade } from './../facade/orderFacade';
import { Body,Query, Controller, Delete, Get, HttpException, HttpStatus, Inject, Injectable, Param, Patch, Post, Put, Req } from '@nestjs/common';

import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';

import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
import { Message } from '../../submodules/Ecommerce-Platform-Common/Message';
import { SNS_SQS } from 'submodules/Ecommerce-Platform-RabbitMQConfig/SNS_SQS';
import { UsersFacade } from 'app/facade/usersFacade';


@Controller('orders')
export class OrderRoutes{

  constructor(private OrderFacade : OrderFacade) { }

  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['ORDERS_ADD','ORDERS_UPDATE','ORDERS_DELETE'];
  private serviceName = ['ORDERS_SERVICE','ORDERS_SERVICE','ORDERS_SERVICE'];
  
  onModuleInit() {
   
    for (var i = 0; i < this.topicArray.length; i++) {
      this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
        let value = this.topicArray[i];
        return async (result) => {
          console.log("Result is........" + JSON.stringify(result));
          try {
            let responseModelOfOrderDto: ResponseModel<OrderDto> = null;
            console.log(`listening to  ${value} topic.....result is....`);
            // ToDo :- add a method for removing queue message from queue....
            switch (value) {
              case 'ORDERS_ADD':
                console.log("Inside ORDERS_ADD Topic");
                responseModelOfOrderDto = await this.createOrder(result["message"]);
                break;
              case 'ORDERS_UPDATE':
                  console.log("Inside ORDERS_UPDATE Topic");
                  responseModelOfOrderDto = await this.updateOrder(result["message"]);
                  break;
              case 'ORDERS_DELETE':
                    console.log("Inside ORDERS_DELETE Topic");
                    responseModelOfOrderDto = await this.deleteOrder(result["message"]);
                    break;
  
            }
  
            console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
            let requestModelOfOrderDto: RequestModel<OrderDto> = result["message"];
            responseModelOfOrderDto.setSocketId(requestModelOfOrderDto.SocketId)
            responseModelOfOrderDto.setCommunityUrl(requestModelOfOrderDto.CommunityUrl);
            responseModelOfOrderDto.setRequestId(requestModelOfOrderDto.RequestGuid);
            responseModelOfOrderDto.setStatus(new Message("200", "Group Inserted Successfully", null));

            for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
              const element = result.OnSuccessTopicsToPush[index];
              console.log("ELEMENT: ", JSON.stringify(responseModelOfOrderDto));
              this.sns_sqs.publishMessageToTopic(element, responseModelOfOrderDto)
            }
          }
          catch (error) {
            console.log("Inside Catch.........");
            console.log(error, result);
            for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
              const element = result.OnFailureTopicsToPush[index];
              let errorResult: ResponseModel<OrderDto> = new ResponseModel<OrderDto>(null,null,null,null,null,null,null,null,null);;
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
 
      return this.OrderFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post("/") 
  async createOrder(@Body() body:RequestModel<OrderDto>): Promise<ResponseModel<OrderDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {

      let result = await this.OrderFacade.create(body);
   
      return result;
//       // return null;
    } catch (error) {
       console.log("Error is....." + error);
       throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put("/")
  async updateOrder(@Body() body: RequestModel<OrderDto>): Promise<ResponseModel<OrderDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {

      console.log("Executing update query..............")
      return await this.OrderFacade.update(body);
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/')
  deleteOrder(@Body() body:RequestModel<OrderDto>): Promise<ResponseModel<OrderDto>>{
    try {

      return this.OrderFacade.deleteById(body);
        } catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
  }

}