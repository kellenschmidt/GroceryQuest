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
const lists_service_1 = require('./../services/lists.service');
const broadcast_service_1 = require('../services/broadcast.service');
const token_service_1 = require('../services/token.service');
let ListsComponent = class ListsComponent {
    constructor(listsService, broadcastService, tokenService) {
        this.listsService = listsService;
        this.broadcastService = broadcastService;
        this.tokenService = tokenService;
        this.token = this.tokenService.getToken();
        listsService.getListsAPI(this.token).then(x => {
            this.lists = x.lists;
            console.log(this.lists);
        });
        // this.lists = listsService.getLists();
    }
    ngOnInit() {
        // this.broadcastService.subscribe('saveGroceryList', (updatedList) => {
        //  		this.listsService.saveList(this.token, updatedList);
        // });
    }
};
ListsComponent = __decorate([
    core_1.Component({
        selector: 'lists',
        templateUrl: './app/lists/lists.html',
        styleUrls: ['./app/lists/lists.css']
    }), 
    __metadata('design:paramtypes', [lists_service_1.ListsService, broadcast_service_1.BroadcastService, token_service_1.TokenService])
], ListsComponent);
exports.ListsComponent = ListsComponent;
//# sourceMappingURL=lists.component.js.map