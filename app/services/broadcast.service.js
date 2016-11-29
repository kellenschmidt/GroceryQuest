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
const core_1 = require('@angular/core');
let BroadcastService = class BroadcastService {
    constructor() {
        this.subscriptions = {};
    }
    broadcast(eventName, args) {
        var subscribers = this.subscriptions[eventName];
        if (subscribers) {
            for (var i = subscribers.length; i--;) {
                subscribers[i](args);
            }
        }
    }
    subscribe(eventName, callBack) {
        if (!this.subscriptions[eventName]) {
            this.subscriptions[eventName] = [];
        }
        this.subscriptions[eventName].push(callBack);
    }
};
BroadcastService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], BroadcastService);
exports.BroadcastService = BroadcastService;
//# sourceMappingURL=broadcast.service.js.map