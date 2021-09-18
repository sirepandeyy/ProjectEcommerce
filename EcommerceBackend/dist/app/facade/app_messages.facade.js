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
exports.App_MessagesFacade = void 0;
const common_1 = require("@nestjs/common");
const app_messages_appservice_1 = require("../appservices/app_messages.appservice");
const facadebase_1 = require("./facadebase");
let App_MessagesFacade = class App_MessagesFacade extends facadebase_1.default {
    constructor(app_messagesAppService) {
        super(app_messagesAppService);
        this.app_messagesAppService = app_messagesAppService;
    }
};
App_MessagesFacade = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [app_messages_appservice_1.default])
], App_MessagesFacade);
exports.App_MessagesFacade = App_MessagesFacade;
//# sourceMappingURL=app_messages.facade.js.map