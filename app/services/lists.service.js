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
const http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
let ListsService = class ListsService {
    constructor(http) {
        this.http = http;
        // _apiUrl: string = "http://138.197.207.203/api"
        this._apiUrl = "https://groceryquest.party/api";
        this._googleUrl = "https://maps.googleapis.com/maps/api/geocode/json";
        this.stores = [
            { "store_id": 1, "store_name": "Kroger on Mockingbird" },
            { "store_id": 2, "store_name": "Tom Thumb on Lovers" },
            { "store_id": 3, "store_name": "Central Market on Lovers" },
            { "store_id": 4, "store_name": "Whole Foods on Greenville" },
        ];
    }
    createAuthorizationHeader(headers, token) {
        headers.append('Authorization', 'Basic ' +
            btoa(`${token}:`));
        console.log(token);
        console.log(btoa(`${token}`));
    }
    getListsAPI(token) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.createAuthorizationHeader(headers, token);
        this.response = this.http.get(this._apiUrl + '/lists', { headers: headers }).toPromise().then(x => x.json());
        // console.log(this.response)
        return this.response;
    }
    getListAPI(token, list_id) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.createAuthorizationHeader(headers, token);
        this.response = this.http.post(this._apiUrl + '/list', { list_id: list_id }, { headers: headers }).toPromise().then(x => x.json());
        return this.response;
    }
    getStores() {
        return this.stores;
    }
    getStoresAPI() {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.response = this.http.get(this._apiUrl + '/stores', { headers: headers }).toPromise().then(x => x.json());
        return this.response;
    }
    getStore(store_id) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.response = this.http.post(this._apiUrl + '/store', { store_id: store_id }, { headers: headers }).toPromise().then(x => x.json());
        return this.response;
    }
    addList(token, store_id, title) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.createAuthorizationHeader(headers, token);
        this.response = this.http.post(this._apiUrl + '/addlist', { store_id: store_id, title: title }, { headers: headers }).toPromise().then(x => x.json());
        return this.response;
    }
    saveList(token, list) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.createAuthorizationHeader(headers, token);
        let body = JSON.stringify(list);
        this.response = this.http.post(this._apiUrl + '/updatelist', body, { headers: headers }).toPromise().then(x => x.json());
        return this.response;
        // console.log(this.response)
        // return this.response;
    }
    getAmountOfItems() {
        return this.lists.length;
    }
    getAutocomplete(data, store_id) {
        return this.http.get(this._apiUrl + '/autocomplete/' + data + '?store_id=' + store_id)
            .toPromise()
            .then(x => x.json());
    }
    getMap(address) {
        return this.http.get(this._googleUrl + "?address=" + address + "&key=AIzaSyBYE-4gk74pmow2BSIMueumCHb8A_kdZlw")
            .toPromise()
            .then(x => x.json());
    }
};
ListsService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], ListsService);
exports.ListsService = ListsService;
//# sourceMappingURL=lists.service.js.map