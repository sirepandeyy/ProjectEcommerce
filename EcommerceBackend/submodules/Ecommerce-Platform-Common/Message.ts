export class Message{

    private errorCode:string;
    private statusMessage:string|null;
    private localStatusMessage:string|null;

    public getErrorCode(): string {
        return this.errorCode;
    }

    public setErrorCode(errorCode: string): void {
        this.errorCode = errorCode;
    }

    public getStatusMessage(): string|null {
        return this.statusMessage;
    }

    public setStatusMessage(statusMessage: string|null): void {
        this.statusMessage = statusMessage;
    }

    public getLocalStatusMessage(): string|null {
        return this.localStatusMessage;
    }

    public setLocalStatusMessage(localStatusMessage: string): void {
        this.localStatusMessage = localStatusMessage;
    }




    constructor(errorcode:string,statusmessage:string|null,localstatusmessage:string|null){
        this.errorCode = errorcode;
        this.localStatusMessage = localstatusmessage;
        this.statusMessage = statusmessage;
    }

}