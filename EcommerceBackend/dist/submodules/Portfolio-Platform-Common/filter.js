"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = exports.RequestType = void 0;
const page_1 = require("./page");
var RequestType;
(function (RequestType) {
    RequestType[RequestType["EXPLICIT"] = 0] = "EXPLICIT";
    RequestType[RequestType["IMPLICIT"] = 1] = "IMPLICIT";
    RequestType[RequestType["BOTH"] = 2] = "BOTH";
})(RequestType = exports.RequestType || (exports.RequestType = {}));
class Filter {
    constructor() {
        this.IsOrderByFieldAsc = false;
        this.Conditions = [];
        this.PageInfo = new page_1.Page();
        this.RequestType = RequestType.IMPLICIT;
    }
}
exports.Filter = Filter;
//# sourceMappingURL=filter.js.map