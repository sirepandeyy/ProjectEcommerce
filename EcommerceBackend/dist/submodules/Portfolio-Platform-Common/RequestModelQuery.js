"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestModelQuery = void 0;
const filter_1 = require("./filter");
const requestModelBase_1 = require("./requestModelBase");
class RequestModelQuery extends requestModelBase_1.RequestModelBase {
    constructor() {
        super(0, "", "");
        this.Filter = new filter_1.Filter();
        this.Children = [];
    }
}
exports.RequestModelQuery = RequestModelQuery;
//# sourceMappingURL=RequestModelQuery.js.map