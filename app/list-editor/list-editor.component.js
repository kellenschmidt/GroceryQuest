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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
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
        this.zoom = 15;
        this.maxBusyness = 0;
        this.weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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
                        this.newListItems = this.list.items.slice();
                        this.listsService.getStore(this.list.store_id).then(x => {
                            this.indivStore = x;
                            this.setMaxBusyness();
                            let d = new Date();
                            this.setDayOfWeek(this.weekdays[d.getDay()]);
                            console.log(this.indivStore);
                            this.listsService.getMap(this.indivStore.address).then(x => {
                                this.lat = x.results[0].geometry.location.lat;
                                this.lng = x.results[0].geometry.location.lng;
                            });
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
                this.maxBusyness = 0;
            }
        });
    }
    getColumnHeight(height) {
        return ((height / this.maxBusyness) * 60) + 3;
    }
    setMaxBusyness() {
        for (let i = 0; i < this.indivStore.busyness.length; i++) {
            if (this.indivStore.busyness[i] > this.maxBusyness) {
                this.maxBusyness = this.indivStore.busyness[i];
            }
        }
    }
    setBusynessofDay(day) {
        let dayNum = this.weekdays.indexOf(day);
        this.busyness = this.indivStore.busyness.slice(dayNum * 24, dayNum * 24 + 24);
    }
    setDayOfWeek(newDay) {
        this.dayOfWeek = newDay;
        this.setBusynessofDay(newDay);
    }
    getColumnLabel(index) {
        if (index == 0)
            return '';
        if (index == 12)
            return '12p';
        if (index < 12)
            return (index).toString() + "a";
        return (index % 12).toString() + "p";
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
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            this.broadcastService.broadcast('saveGroceryList', this.list);
            console.log(this.list);
            // how to wait for this to return to navigate
            this.listsService.saveList(this.token, this.list);
            yield this.sleep(250);
            this.router.navigateByUrl('profile');
            // this.router.navigate(['../../'], { relativeTo: this.route });
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            this.listsService.deleteList(this.token, this.list.list_id);
            yield this.sleep(250);
            this.router.navigateByUrl('profile');
        });
    }
    onChange(value) {
        this.store_id = value;
        this.listsService.getStore(value).then(x => {
            this.indivStore = x;
            this.setMaxBusyness();
            let d = new Date();
            this.setDayOfWeek(this.weekdays[d.getDay()]);
            console.log(this.indivStore);
            this.listsService.getMap(this.indivStore.address).then(x => {
                this.lat = x.results[0].geometry.location.lat;
                this.lng = x.results[0].geometry.location.lng;
            });
        });
    }
    // Analyzes two list item arrays comparing item names for equivalence
    listsEqual(array1, array2) {
        if (array1.length !== array2.length)
            return false;
        for (let i = 0; i < array1.length; i++) {
            if (array1[i].name !== array2[i].name)
                return false;
        }
        return true;
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