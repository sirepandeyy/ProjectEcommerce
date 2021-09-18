"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkFacade = void 0;
const common_1 = require("@nestjs/common");
const facadebase_1 = require("./facadebase");
const orderService_1 = require("../appService/orderService");
const linkService_1 = require("../appService/linkService");
let LinkFacade = class LinkFacade extends facadebase_1.default {
    constructor(linkService) {
        super(linkService);
        this.linkService = linkService;
    }
};
LinkFacade = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [linkService_1.default])
], LinkFacade);
exports.LinkFacade = LinkFacade;
//# sourceMappingURL=linkFacade.js.map