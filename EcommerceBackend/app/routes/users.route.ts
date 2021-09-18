import { UserDto } from './../../submodules/Ecommerce-Platform-Dtos/usersDto';
import { Body,Query, Controller, Delete, Get, HttpException, HttpStatus, Inject, Injectable, Param, Patch, Post, Put, Req } from '@nestjs/common';

import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';

import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
import { Message } from '../../submodules/Ecommerce-Platform-Common/Message';
import { SNS_SQS } from 'submodules/Ecommerce-Platform-RabbitMQConfig/SNS_SQS';
import { UsersFacade } from 'app/facade/usersFacade';


@Controller('app_users')
export class UsersRoutes{

  constructor(private usersFacade : UsersFacade) { }

  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['APP_USERS_ADD','APP_USERS_UPDATE','APP_USERS_DELETE'];
  private serviceName = ['APP_USERS_SERVICE','APP_USERS_SERVICE','APP_USERS_SERVICE'];
  
  onModuleInit() {
   
    for (var i = 0; i < this.topicArray.length; i++) {
      this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
        let value = this.topicArray[i];
        return async (result) => {
          console.log("Result is........" + JSON.stringify(result));
          try {
            let responseModelOfUsersDto: ResponseModel<UserDto> = null;
            console.log(`listening to  ${value} topic.....result is....`);
            // ToDo :- add a method for removing queue message from queue....
            switch (value) {
              case 'APP_USERS_ADD':
                console.log("Inside USERS_ADD Topic");
                responseModelOfUsersDto = await this.createUsers(result["message"]);
                break;
              case 'APP_USERS_UPDATE':
                  console.log("Inside USERS_UPDATE Topic");
                  responseModelOfUsersDto = await this.updateUsers(result["message"]);
                  break;
              case 'APP_USERS_DELETE':
                    console.log("Inside USERS_DELETE Topic");
                    responseModelOfUsersDto = await this.deleteUsers(result["message"]);
                    break;
  
            }
  
            console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
            let requestModelOfUsersDto: RequestModel<UserDto> = result["message"];
            responseModelOfUsersDto.setSocketId(requestModelOfUsersDto.SocketId)
            responseModelOfUsersDto.setCommunityUrl(requestModelOfUsersDto.CommunityUrl);
            responseModelOfUsersDto.setRequestId(requestModelOfUsersDto.RequestGuid);
            responseModelOfUsersDto.setStatus(new Message("200", "Group Inserted Successfully", null));

            for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
              const element = result.OnSuccessTopicsToPush[index];
              console.log("ELEMENT: ", JSON.stringify(responseModelOfUsersDto));
              this.sns_sqs.publishMessageToTopic(element, responseModelOfUsersDto)
            }
          }
          catch (error) {
            console.log("Inside Catch.........");
            console.log(error, result);
            for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
              const element = result.OnFailureTopicsToPush[index];
              let errorResult: ResponseModel<UserDto> = new ResponseModel<UserDto>(null,null,null,null,null,null,null,null,null);;
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
 
      return this.usersFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post("/") 
  async createUsers(@Body() body:RequestModel<UserDto>): Promise<ResponseModel<UserDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {

      let result = await this.usersFacade.create(body,);
   
      return result;
      // return null;
    } catch (error) {
       console.log("Error is....." + error);
       throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put("/")
  async updateUsers(@Body() body: RequestModel<UserDto>): Promise<ResponseModel<UserDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {

      console.log("Executing update query..............")
      return await this.usersFacade.update(body);
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/')
  deleteUsers(@Body() body:RequestModel<UserDto>): Promise<ResponseModel<UserDto>>{
    try {

      return this.usersFacade.deleteById(body);
        } catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
  }

}