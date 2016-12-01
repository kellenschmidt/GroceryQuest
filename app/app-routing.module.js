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
const landing_component_1 = require('./landing/landing.component');
const list_editor_component_1 = require('./list-editor/list-editor.component');
const login_component_1 = require('./login/login.component');
const signup_component_1 = require('./signup/signup.component');
const profile_component_1 = require('./profile/profile.component');
const not_found_component_1 = require('./not-found/not-found.component');
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot([
                { path: '', component: landing_component_1.LandingComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'signup', component: signup_component_1.SignupComponent },
                { path: 'profile', component: profile_component_1.ProfileComponent },
                { path: 'profile/lists/new', component: list_editor_component_1.ListEditorComponent },
                { path: 'profile/lists/:list_id', component: list_editor_component_1.ListEditorComponent },
                { path: '**', component: not_found_component_1.NotFoundComponent },
            ]),
        ],
        exports: [
            router_1.RouterModule
        ]
    }), 
    __metadata('design:paramtypes', [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map