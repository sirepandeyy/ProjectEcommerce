"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoBase = void 0;
class DtoBase {
    constructor() {
        this.RowVersion = 0;
        this.CreationDate = new Date();
        this.ModifiedDate = new Date();
    }
}
exports.DtoBase = DtoBase;
//# sourceMappingURL=dtobase.js.map