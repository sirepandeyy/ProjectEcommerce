"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message {
    constructor(errorcode, statusmessage, localstatusmessage) {
        this.errorCode = errorcode;
        this.localStatusMessage = localstatusmessage;
        this.statusMessage = statusmessage;
    }
    getErrorCode() {
        return this.errorCode;
    }
    setErrorCode(errorCode) {
        this.errorCode = errorCode;
    }
    getStatusMessage() {
        return this.statusMessage;
    }
    setStatusMessage(statusMessage) {
        this.statusMessage = statusMessage;
    }
    getLocalStatusMessage() {
        return this.localStatusMessage;
    }
    setLocalStatusMessage(localStatusMessage) {
        this.localStatusMessage = localStatusMessage;
    }
}
exports.Message = Message;
//# sourceMappingURL=Message.js.map