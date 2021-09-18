"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Condition = void 0;
const conditionOperation_1 = require("./conditionOperation");
class Condition {
    constructor() {
        this.ConditionalSymbol = conditionOperation_1.ConditionalOperation.And;
        this.IsCaseInSensitiveSearch = true;
    }
}
exports.Condition = Condition;
//# sourceMappingURL=condition.js.map