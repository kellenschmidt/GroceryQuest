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
const router_1 = require('@angular/router');
require('rxjs/add/operator/toPromise');
let TokenService = class TokenService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        // _apiUrl: string = "http://138.197.207.203/api"
        this._apiUrl = "https://groceryquest.party/api";
    }
    createAuthorizationHeader(headers, username, password) {
        headers.append('Authorization', 'Basic ' +
            btoa(`${username}:${password}`));
    }
    login(username, password) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.createAuthorizationHeader(headers, username, password);
        this.response = this.http.get(this._apiUrl + '/token', { headers: headers }).toPromise().then(x => x.json());
        this.response.then(x => {
            this.token = x.token;
        });
        return this.response;
    }
    signup(email, first_name, last_name, password) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.response = this.http.post(this._apiUrl + '/register', { email: email, first_name: first_name, last_name: last_name, password: password }).toPromise().then(x => x.json());
        this.response.then(x => {
            this.token = x.token;
        });
        return this.response;
    }
    getToken() {
        return this.token;
    }
    resetToken() {
        this.token = "";
    }
};
TokenService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map