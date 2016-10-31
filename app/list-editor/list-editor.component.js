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
const lists_service_1 = require('./../lists.service');
let ListEditorComponent = class ListEditorComponent {
    constructor(route, router, listsService) {
        this.route = route;
        this.router = router;
        this.listsService = listsService;
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            this.stores = this.listsService.getStores();
            if (params['list_id'] !== undefined) {
                this.list = this.listsService.getList(+params['list_id']);
                console.log(this.listsService.getList(+params['list_id']));
                this.title = this.list.store_name.toString();
            }
            else {
                this.list = {
                    items: []
                };
                this.title = 'New List';
            }
        });
    }
    save() {
        this.listsService.saveList(this.list);
        this.router.navigateByUrl('lists');
    }
};
ListEditorComponent = __decorate([
    core_1.Component({
        selector: 'list-editor',
        templateUrl: './app/list-editor/list-editor.html',
        styleUrls: ['./app/list-editor/list-editor.css']
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, lists_service_1.ListsService])
], ListEditorComponent);
exports.ListEditorComponent = ListEditorComponent;
//# sourceMappingURL=list-editor.component.js.map