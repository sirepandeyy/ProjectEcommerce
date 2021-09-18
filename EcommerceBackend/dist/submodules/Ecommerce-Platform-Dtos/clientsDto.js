"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsDto = void 0;
const dtobase_1 = require("./DtoBase/dtobase");
class ClientsDto extends dtobase_1.DtoBase {
    constructor() {
        super();
        this.start_date = new Date();
        this.expiry_date = new Date();
    }
}
exports.ClientsDto = ClientsDto;
//# sourceMappingURL=clientsDto.js.map