import { LinkDto } from './../../submodules/Ecommerce-Platform-Dtos/link';
import { OrderDto } from './../../submodules/Ecommerce-Platform-Dtos/order';
import { OrderFacade } from './../facade/orderFacade';
import { Body,Query, Controller, Delete, Get, HttpException, HttpStatus, Inject, Injectable, Param, Patch, Post, Put, Req } from '@nestjs/common';

import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';

import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
import { Message } from '../../submodules/Ecommerce-Platform-Common/Message';
import { SNS_SQS } from 'submodules/Ecommerce-Platform-RabbitMQConfig/SNS_SQS';
import { UsersFacade } from 'app/facade/usersFacade';
import { LinkFacade } from 'app/facade/linkFacade';


@Controller('links')
export class LinkRoutes{

  constructor(private LinkFacade : LinkFacade) { }

  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['LINKS_ADD','LINKS_UPDATE','LINKS_DELETE'];
  private serviceName = ['LINKS_SERVICE','LINKS_SERVICE','LINKS_SERVICE'];
  
  onModuleInit() {
   
    for (var i = 0; i < this.topicArray.length; i++) {
      this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
        let value = this.topicArray[i];
        return async (result) => {
          console.log("Result is........" + JSON.stringify(result));
          try {
            let responseModelOfLinkDto: ResponseModel<LinkDto> = null;
            console.log(`listening to  ${value} topic.....result is....`);
            // ToDo :- add a method for removing queue message from queue....
            switch (value) {
              case 'LINKS_ADD':
                console.log("Inside LINKS_ADD Topic");
                responseModelOfLinkDto = await this.createLink(result["message"]);
                break;
              case 'LINKS_UPDATE':
                  console.log("Inside LINKS_UPDATE Topic");
                  responseModelOfLinkDto = await this.updateLink(result["message"]);
                  break;
              case 'LINKS_DELETE':
                    console.log("Inside LINKS_DELETE Topic");
                    responseModelOfLinkDto = await this.deleteLink(result["message"]);
                    break;
  
            }
  
            console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
            let requestModelOfLinkDto: RequestModel<LinkDto> = result["message"];
            responseModelOfLinkDto.setSocketId(requestModelOfLinkDto.SocketId)
            responseModelOfLinkDto.setCommunityUrl(requestModelOfLinkDto.CommunityUrl);
            responseModelOfLinkDto.setRequestId(requestModelOfLinkDto.RequestGuid);
            responseModelOfLinkDto.setStatus(new Message("200", "Group Inserted Successfully", null));

            for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
              const element = result.OnSuccessTopicsToPush[index];
              console.log("ELEMENT: ", JSON.stringify(responseModelOfLinkDto));
              this.sns_sqs.publishMessageToTopic(element, responseModelOfLinkDto)
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
 
      return this.LinkFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  

//   @Post('/')
//   async createLink(
//     @Body('products') products: number[],
// ) {
    
//     return this.LinkFacade.create({
//         code: Math.random().toString(36).substr(6),
//         products: products.map(id => ({id}))
//     })}


@Get(':id')
UserById(@Param('id') id: number): Promise<ResponseModel<LinkDto>> {
try {
  console.log("id is............." + JSON.stringify(id));
  return this.LinkFacade.getByIds([id]);
} catch (error) {
  throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
}
}  

   @Post("/") 
   async createLink(@Body() body:RequestModel<LinkDto>): Promise<ResponseModel<LinkDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
     try {

       let result = await this.LinkFacade.create(body);
   
       return result;
        // return null;
     } catch (error) {
        console.log("Error is....." + error);
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
     }
   }

  @Put("/")
  async updateLink(@Body() body: RequestModel<LinkDto>): Promise<ResponseModel<LinkDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {

      console.log("Executing update query..............")
      return await this.LinkFacade.update(body);
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/')
  deleteLink(@Body() body:RequestModel<LinkDto>): Promise<ResponseModel<LinkDto>>{
    try {

      return this.LinkFacade.deleteById(body);
        } catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
  }

}