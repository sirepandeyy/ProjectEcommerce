import { DtoBase } from './../Ecommerce-Platform-Dtos/DtoBase/dtobase';
import { ServiceOperationResultType } from "./ServiceOperationResultType";
import { Message } from "./Message";

export class ResponseModel<TDto extends DtoBase> {
  private RequestId: string;
  private DataCollection: TDto[] | null;
  private ResultType: number;
  private Status: Message | null;
  private Messages: Array<Message> | null;
  public zoomToken: string;

  private SocketId: string;

  private CommunityUrl: string;

  constructor(
    requestId: string,
    data: Array<TDto> | null,
    resultType: ServiceOperationResultType,
    errorCode: string,
    statusMessage: string | null,
    localizedStatusMessage: string | null,
    message: Array<Message> | null,
    socketId: string,
    communityUrl: string
  ) {
    this.RequestId = requestId;
    this.DataCollection = data;
    this.ResultType = resultType;
    this.Status = new Message(
      errorCode,
      statusMessage,
      localizedStatusMessage
    );
    this.Messages = message;
    this.SocketId = socketId;
    this.CommunityUrl = communityUrl;
  }

  public getRequestId(): string {
    return this.RequestId;
  }


  public setRequestId(RequestId: string): void {
    this.RequestId = RequestId;
  }

  public getCommunityUrl(): string {
    return this.CommunityUrl;
  }


  public setMessage(statusCode:string,input_message:string):void{
    let message = new Message(statusCode,input_message,null);
    this.Status = message;
  }

  public setCommunityUrl(communityUrl: string) {
    this.CommunityUrl = communityUrl;
  }

  public getDataCollection(): TDto[] | null {
    return this.DataCollection;
  }

  public setDataCollection(DataCollection: TDto[]): void {
    this.DataCollection = DataCollection;
  }

  public getResultType(): number {
    return this.ResultType;
  }

  public getData(): TDto | null {
    let t_temp =
      this.DataCollection != null && this.DataCollection[0] != null
        ? (this.DataCollection[0] as TDto)
        : null;
    return t_temp;
  }
  public getSocketId(): string {
    return this.SocketId;
  }
  public setSocketId(socketId: string): void {
    this.SocketId = socketId;
  }
  public setStatus(Status: Message): void {
    this.Status = Status;
  }

  public getMessages(): Array<Message> | null {
    return this.Messages;
  }

  CreateFailureResult(
    requestId: string,
    message: string,
    messages: Array<Message>,
    localizedMessage: string = "",
    validationCode: string = "",
    socketId: string = "",
    communityUrl: string = ""
  ): ResponseModel<TDto> | null {
    return new ResponseModel<TDto>(
      requestId,
      null,
      ServiceOperationResultType.failure,
      validationCode,
      message,
      localizedMessage,
      messages,
      socketId,
      communityUrl
    );

  }
  CreateErrorResult(
    requestId: string,
    errorCode: string,
    message: string = "",
    localizedMessage: string = "",
    socketId: string = "",
    communityUrl: string = ""
  ): ResponseModel<TDto> {
    return new ResponseModel<TDto>(
      requestId,
      null,
      ServiceOperationResultType.error,
      errorCode,
      message,
      localizedMessage,
      null,
      socketId,
      communityUrl
    );
  }
  
  CreateSuccessResult(
    requestId: string,
    data: Array<TDto>,
    message: string | null,
    messages: Array<Message> | null,
    localizedMessage: string | null,
    socketId: string = "",
    communityUrl: string = ""
  ) {
    return new ResponseModel<TDto>(
      requestId,
      data,
      ServiceOperationResultType.success,
      "200",
      message,
      localizedMessage != null ? localizedMessage : null,
      messages,
      socketId,
      communityUrl
    );
  }

  public echo<D>(arg: D): D {
    return arg;
  }
}
