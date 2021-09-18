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
exports.AppsFacade = void 0;
const common_1 = require("@nestjs/common");
const apps_appservice_1 = require("../appservices/apps.appservice");
const facadebase_1 = require("./facadebase");
let AppsFacade = class AppsFacade extends facadebase_1.default {
    constructor(appsAppService) {
        super(appsAppService);
        this.appsAppService = appsAppService;
    }
};
AppsFacade = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [apps_appservice_1.default])
], AppsFacade);
exports.AppsFacade = AppsFacade;
//# sourceMappingURL=apps.facade.js.map