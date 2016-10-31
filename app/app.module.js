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
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const router_1 = require('@angular/router');
const http_1 = require('@angular/http');
const app_component_1 = require('./app.component');
const lists_service_1 = require('./lists.service');
const landing_component_1 = require('./landing/landing.component');
const lists_component_1 = require('./lists/lists.component');
const list_editor_component_1 = require('./list-editor/list-editor.component');
const item_editor_component_1 = require('./item-editor/item-editor.component');
const login_component_1 = require('./login/login.component');
const signup_component_1 = require('./signup/signup.component');
const profile_component_1 = require('./profile/profile.component');
const profile_service_1 = require('./profile.service');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: '', component: landing_component_1.LandingComponent },
                { path: 'lists', component: lists_component_1.ListsComponent },
                { path: 'lists/new', component: list_editor_component_1.ListEditorComponent },
                { path: 'lists/:list_id', component: list_editor_component_1.ListEditorComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'signup', component: signup_component_1.SignupComponent },
                { path: 'profile/:user_id', component: profile_component_1.ProfileComponent },
            ]),
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            landing_component_1.LandingComponent,
            lists_component_1.ListsComponent,
            list_editor_component_1.ListEditorComponent,
            item_editor_component_1.ItemEditorComponent,
            login_component_1.LoginComponent,
            signup_component_1.SignupComponent,
            profile_component_1.ProfileComponent
        ],
        providers: [lists_service_1.ListsService, profile_service_1.ProfileService],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map