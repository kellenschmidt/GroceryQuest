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
const lists_service_1 = require('./../services/lists.service');
const broadcast_service_1 = require('../services/broadcast.service');
const token_service_1 = require('../services/token.service');
let ListEditorComponent = class ListEditorComponent {
    constructor(route, router, listsService, broadcastService, tokenService) {
        this.route = route;
        this.router = router;
        this.listsService = listsService;
        this.broadcastService = broadcastService;
        this.tokenService = tokenService;
        this.list = {};
        this.indivStore = {};
        this.token = this.tokenService.getToken();
        this.listsService.getStoresAPI().then(x => {
            this.stores = x;
        });
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            if (params['list_id'] !== undefined) {
                this.route.params.forEach((params) => {
                    this.listsService.getListAPI(this.token, +params['list_id']).then(x => {
                        this.list = x;
                        this.listsService.getStore(this.list.store_id).then(x => {
                            this.indivStore = x;
                            console.log(this.indivStore);
                        });
                    });
                });
            }
            else {
                this.list = {
                    items: []
                };
                this.newListItems = [];
                this.title = 'New List';
            }
        });
    }
    // ngAfterContentChecked() {
    //     this.store_id = $("#store_id").val();
    //     console.log(this.store_id)
    //     // this.listsService.getStore(this.store_id).then(x => {
    //     //     this.indivStore = x;
    //     // });
    // }
    addList() {
        console.log({ token: this.token, store_id: this.list.store_id, title: this.list.title });
        this.listsService.addList(this.token, this.list.store_id, this.list.title).then(x => {
            this.list.list_id = x.list_id;
            console.log(this.list);
        });
    }
    save() {
        this.broadcastService.broadcast('saveGroceryList', this.list);
        console.log(this.list);
        this.listsService.saveList(this.token, this.list);
        this.router.navigateByUrl('profile');
        // this.router.navigate(['../../'], { relativeTo: this.route });
    }
    onChange(value) {
        this.store_id = value;
        this.listsService.getStore(value).then(x => {
            this.indivStore = x;
            console.log(this.indivStore);
        });
    }
};
ListEditorComponent = __decorate([
    core_1.Component({
        selector: 'list-editor',
        templateUrl: './app/list-editor/list-editor.html',
        styleUrls: ['./app/list-editor/list-editor.css']
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, lists_service_1.ListsService, broadcast_service_1.BroadcastService, token_service_1.TokenService])
], ListEditorComponent);
exports.ListEditorComponent = ListEditorComponent;
//# sourceMappingURL=list-editor.component.js.map