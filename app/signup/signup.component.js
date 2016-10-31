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
const router_1 = require('@angular/router');
const http_1 = require('@angular/http');
let SignupComponent = class SignupComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    signup(event, username, password) {
        event.preventDefault();
        let body = JSON.stringify({ username, password });
        console.log(body);
        // this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
    }
};
SignupComponent = __decorate([
    core_1.Component({
        selector: 'signup',
        templateUrl: './app/signup/signup.html',
        styleUrls: ['./app/signup/signup.css']
    }), 
    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
], SignupComponent);
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map