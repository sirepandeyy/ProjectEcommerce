"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseModel = void 0;
const ServiceOperationResultType_1 = require("./ServiceOperationResultType");
const Message_1 = require("./Message");
class ResponseModel {
    constructor(requestId, data, resultType, errorCode, statusMessage, localizedStatusMessage, message, socketId, communityUrl) {
        this.RequestId = requestId;
        this.DataCollection = data;
        this.ResultType = resultType;
        this.Status = new Message_1.Message(errorCode, statusMessage, localizedStatusMessage);
        this.Messages = message;
        this.SocketId = socketId;
        this.CommunityUrl = communityUrl;
    }
    getRequestId() {
        return this.RequestId;
    }
    setRequestId(RequestId) {
        this.RequestId = RequestId;
    }
    getCommunityUrl() {
        return this.CommunityUrl;
    }
    setMessage(statusCode, input_message) {
        let message = new Message_1.Message(statusCode, input_message, null);
        this.Status = message;
    }
    setCommunityUrl(communityUrl) {
        this.CommunityUrl = communityUrl;
    }
    getDataCollection() {
        return this.DataCollection;
    }
    setDataCollection(DataCollection) {
        this.DataCollection = DataCollection;
    }
    getResultType() {
        return this.ResultType;
    }
    getData() {
        let t_temp = this.DataCollection != null && this.DataCollection[0] != null
            ? this.DataCollection[0]
            : null;
        return t_temp;
    }
    getSocketId() {
        return this.SocketId;
    }
    setSocketId(socketId) {
        this.SocketId = socketId;
    }
    setStatus(Status) {
        this.Status = Status;
    }
    getMessages() {
        return this.Messages;
    }
    CreateFailureResult(requestId, message, messages, localizedMessage = "", validationCode = "", socketId = "", communityUrl = "") {
        return new ResponseModel(requestId, null, ServiceOperationResultType_1.ServiceOperationResultType.failure, validationCode, message, localizedMessage, messages, socketId, communityUrl);
    }
    CreateErrorResult(requestId, errorCode, message = "", localizedMessage = "", socketId = "", communityUrl = "") {
        return new ResponseModel(requestId, null, ServiceOperationResultType_1.ServiceOperationResultType.error, errorCode, message, localizedMessage, null, socketId, communityUrl);
    }
    CreateSuccessResult(requestId, data, message, messages, localizedMessage, socketId = "", communityUrl = "") {
        return new ResponseModel(requestId, data, ServiceOperationResultType_1.ServiceOperationResultType.success, "200", message, localizedMessage != null ? localizedMessage : null, messages, socketId, communityUrl);
    }
    echo(arg) {
        return arg;
    }
}
exports.ResponseModel = ResponseModel;
//# sourceMappingURL=ResponseModel.js.map