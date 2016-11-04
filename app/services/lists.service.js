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
let ListsService = class ListsService {
    constructor() {
        this.stores = [
            { "store_id": 1, "store_name": "Kroger on Mockingbird" },
            { "store_id": 2, "store_name": "Tom Thumb on Lovers" },
            { "store_id": 3, "store_name": "Central Market on Lovers" },
            { "store_id": 4, "store_name": "Whole Foods on Greenville" },
        ];
        this.lists = [
            {
                "user_id": "asdf32543",
                "list_id": 1,
                "store_id": 1,
                "store_name": "Kroger on Mockingbird",
                "items": [
                    {
                        "item_id": 1,
                        "price": 15.43,
                        "coupon": false,
                        "percentoff": 10,
                        "name": "Frosted Flakes",
                        "location": [
                            123.144, 145.254
                        ]
                    },
                    {
                        "item_id": 2,
                        "price": 3.99,
                        "coupon": false,
                        "percentoff": 0,
                        "name": "PopTarts",
                        "location": [
                            156.532, 563.142
                        ]
                    }
                ]
            },
            {
                "list_id": 2,
                "store_id": 2,
                "store_name": "Tom Thumb on Lovers",
                "items": [
                    {
                        "item_id": 3,
                        "price": 5.43,
                        "coupon": false,
                        "percentoff": 5,
                        "name": "Fruity Pebbles",
                        "location": [
                            125.144, 145.254
                        ]
                    },
                    {
                        "item_id": 4,
                        "price": 5.43,
                        "coupon": true,
                        "percentoff": 0,
                        "name": "Bagels",
                        "location": [
                            156.532, 563.142
                        ]
                    }
                ]
            }
        ];
    }
    getLists() {
        return this.lists;
    }
    getList(list_id) {
        return this.lists[list_id - 1];
    }
    getStores() {
        return this.stores;
    }
    saveList(list) {
        if (list.list_id === undefined) {
            list.list_id = this.lists.length + 1;
        }
        this.lists[list.list_id - 1] = list;
    }
    getAmountOfItems() {
        return this.lists.length;
    }
};
ListsService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], ListsService);
exports.ListsService = ListsService;
//# sourceMappingURL=lists.service.js.map