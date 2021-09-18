export declare class Message {
    private errorCode;
    private statusMessage;
    private localStatusMessage;
    getErrorCode(): string;
    setErrorCode(errorCode: string): void;
    getStatusMessage(): string | null;
    setStatusMessage(statusMessage: string | null): void;
    getLocalStatusMessage(): string | null;
    setLocalStatusMessage(localStatusMessage: string): void;
    constructor(errorcode: string, statusmessage: string | null, localstatusmessage: string | null);
}
