import { RoleFacade } from './../facade/roleFacade';
import { RoleDto } from './../../submodules/Ecommerce-Platform-Dtos/roleDto';
import { UserDto } from './../../submodules/Ecommerce-Platform-Dtos/usersDto';
import { Body,Query, Controller, Delete, Get, HttpException, HttpStatus, Inject, Injectable, Param, Patch, Post, Put, Req } from '@nestjs/common';

import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';

import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
import { Message } from '../../submodules/Ecommerce-Platform-Common/Message';
import { SNS_SQS } from 'submodules/Ecommerce-Platform-RabbitMQConfig/SNS_SQS';
import { UsersFacade } from 'app/facade/usersFacade';


@Controller('app_roles')
export class RoleRoutes{

  constructor(private roleFacade : RoleFacade) { }

  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['APP_ROLES_ADD','APP_ROLES_UPDATE','APP_ROLES_DELETE'];
  private serviceName = ['APP_ROLES_SERVICE','APP_ROLES_SERVICE','APP_ROLES_SERVICE'];
  
  onModuleInit() {
   
    for (var i = 0; i < this.topicArray.length; i++) {
      this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
        let value = this.topicArray[i];
        return async (result) => {
          console.log("Result is........" + JSON.stringify(result));
          try {
            let responseModelOfRolesDto: ResponseModel<RoleDto> = null;
            console.log(`listening to  ${value} topic.....result is....`);
            // ToDo :- add a method for removing queue message from queue....
            switch (value) {
              case 'APP_ROLES_ADD':
                console.log("Inside ROLES_ADD Topic");
                responseModelOfRolesDto = await this.createRoles(result["message"]);
                break;
              case 'APP_ROLES_UPDATE':
                  console.log("Inside ROLES_UPDATE Topic");
                  responseModelOfRolesDto = await this.updateRoles(result["message"]);
                  break;
              case 'APP_ROLES_DELETE':
                    console.log("Inside ROLES_DELETE Topic");
                    responseModelOfRolesDto = await this.deleteRoles(result["message"]);
                    break;
  
            }
  
            console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
            let requestModelOfRolesDto: RequestModel<RoleDto> = result["message"];
            responseModelOfRolesDto.setSocketId(requestModelOfRolesDto.SocketId)
            responseModelOfRolesDto.setCommunityUrl(requestModelOfRolesDto.CommunityUrl);
            responseModelOfRolesDto.setRequestId(requestModelOfRolesDto.RequestGuid);
            responseModelOfRolesDto.setStatus(new Message("200", "Group Inserted Successfully", null));

            for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
              const element = result.OnSuccessTopicsToPush[index];
              console.log("ELEMENT: ", JSON.stringify(responseModelOfRolesDto));
              this.sns_sqs.publishMessageToTopic(element, responseModelOfRolesDto)
            }
          }
          catch (error) {
            console.log("Inside Catch.........");
            console.log(error, result);
            for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
              const element = result.OnFailureTopicsToPush[index];
              let errorResult: ResponseModel<RoleDto> = new ResponseModel<RoleDto>(null,null,null,null,null,null,null,null,null);;
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
 
      return this.roleFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post("/") 
  async createRoles(@Body() body:RequestModel<RoleDto>): Promise<ResponseModel<RoleDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {

      let result = await this.roleFacade.create(body);
   
      return result;
      // return null;
    } catch (error) {
       console.log("Error is....." + error);
       throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put("/")
  async updateRoles(@Body() body: RequestModel<RoleDto>): Promise<ResponseModel<RoleDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {

      console.log("Executing update query..............")
      return await this.roleFacade.update(body);
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/')
  deleteRoles(@Body() body:RequestModel<RoleDto>): Promise<ResponseModel<RoleDto>>{
    try {

      return this.roleFacade.deleteById(body);
        } catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
  }

}