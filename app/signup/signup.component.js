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
const token_service_1 = require('./../services/token.service');
let SignupComponent = class SignupComponent {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
        this.status = 200;
    }
    signup(email, first_name, last_name, password) {
        this.response = this.tokenService.signup(email, first_name, last_name, password)
            .then(x => {
            this.token = x.token;
            console.log(this.token);
            this.status = 200;
            this.router.navigateByUrl('profile');
        }, (err) => {
            this.status = err.status;
            $("#email").css("border-color", "#f45531").css("color", "#f45531");
        });
    }
};
SignupComponent = __decorate([
    core_1.Component({
        selector: 'signup',
        templateUrl: './app/signup/signup.html',
        styleUrls: ['./app/signup/signup.css']
    }), 
    __metadata('design:paramtypes', [token_service_1.TokenService, router_1.Router])
], SignupComponent);
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map