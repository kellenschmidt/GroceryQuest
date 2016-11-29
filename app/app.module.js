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
const http_1 = require('@angular/http');
const app_component_1 = require('./app.component');
const app_routing_module_1 = require('./app-routing.module');
const lists_service_1 = require('./services/lists.service');
const landing_component_1 = require('./landing/landing.component');
const lists_component_1 = require('./lists/lists.component');
const list_editor_component_1 = require('./list-editor/list-editor.component');
const item_editor_component_1 = require('./item-editor/item-editor.component');
const login_component_1 = require('./login/login.component');
const signup_component_1 = require('./signup/signup.component');
const profile_component_1 = require('./profile/profile.component');
const profile_service_1 = require('./services/profile.service');
const broadcast_service_1 = require('./services/broadcast.service');
const token_service_1 = require('./services/token.service');
const not_found_component_1 = require('./not-found/not-found.component');
const core_2 = require('angular2-google-maps/core');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyCNiDGEJK09Bb1A_CRi8-bOJwlhKF8ox3g'
            })
        ],
        declarations: [
            app_component_1.AppComponent,
            landing_component_1.LandingComponent,
            lists_component_1.ListsComponent,
            list_editor_component_1.ListEditorComponent,
            item_editor_component_1.ItemEditorComponent,
            login_component_1.LoginComponent,
            signup_component_1.SignupComponent,
            profile_component_1.ProfileComponent,
            not_found_component_1.NotFoundComponent,
        ],
        providers: [lists_service_1.ListsService, profile_service_1.ProfileService, broadcast_service_1.BroadcastService, token_service_1.TokenService],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map