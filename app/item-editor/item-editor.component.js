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
const lists_service_1 = require('./../services/lists.service');
const token_service_1 = require('../services/token.service');
let ItemEditorComponent = class ItemEditorComponent {
    constructor(listsService, tokenService) {
        this.listsService = listsService;
        this.tokenService = tokenService;
        this.update = {};
        this.token = this.tokenService.getToken();
        this.placeholder = "Item name...";
        this._itemEntry = {};
    }
    // ngOnInit() {
    // 	this.sortByPosition();
    // }
    addItem() {
        this.listsService.getAutocomplete(this._itemEntry.name, this.store)
            .then(x => {
            this.update = x[0];
            this.update["position"] = this.model.length + 1;
            // this.update["item_id"] = this.model[this.model.length - 1]["item_id"] + 1;
            this.model.push(this.update);
        });
        // this._itemEntry.list_id = this.model.length + 1;
        // this.model.push(this._itemEntry);
        this._itemEntry = {};
    }
    removeItem(index) {
        this.model.splice(index, 1);
    }
    swapItems(index1, index2) {
        // Skip swaps for out of range indices
        if (index1 < 0 || index2 >= this.model.length) {
            return;
        }
        // Get element at index2
        let tempItem = this.model.slice(index2, index2 + 1);
        // Get positions in list of items at index1 and index2
        let index1Position = this.model[index1].position;
        let index2Position = this.model[index2].position;
        // Copy element at index1 to element at index2
        this.model.copyWithin(index2, index1, index1 + 1);
        this.model[index2].position = index2Position;
        // Set element at index1 equal to element at index2
        this.model[index1] = tempItem[0];
        this.model[index1].position = index1Position;
    }
    reassignPositions() {
        for (let i = 0; i < this.model.length; i++) {
            this.model[i].position = i + 1;
        }
    }
    // Sort json item objects by name using custom compare function
    sortByName() {
        this.model.sort(function (a, b) {
            if (a.name < b.name)
                return -1;
            else if (a.name > b.name)
                return 1;
            else
                return 0;
        });
        this.reassignPositions();
    }
    sortByAisle() {
        this.model.sort(function (a, b) {
            if (a.location < b.location)
                return -1;
            else if (a.location > b.location)
                return 1;
            else
                return 0;
        });
        this.reassignPositions();
    }
    sortByPosition() {
        this.model.sort(function (a, b) {
            if (a.position < b.position)
                return -1;
            else if (a.position > b.position)
                return 1;
            else
                return 0;
        });
    }
    autoComplete(event) {
        // TODO fix this
        // if(event.target.value !== "" && event.keyCode !== 37 && event.keyCode !== 38 && event.keyCode !== 39 && event.keyCode !== 40) {
        this.listsService.getAutocomplete(event.target.value, this.store).then(x => this.autocomplete = x);
        // }
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], ItemEditorComponent.prototype, "model", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ItemEditorComponent.prototype, "store", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ItemEditorComponent.prototype, "list", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], ItemEditorComponent.prototype, "placeholder", void 0);
ItemEditorComponent = __decorate([
    core_1.Component({
        selector: 'item-editor',
        templateUrl: './app/item-editor/item-editor.html',
        styleUrls: ['./app/item-editor/item-editor.css']
    }), 
    __metadata('design:paramtypes', [lists_service_1.ListsService, token_service_1.TokenService])
], ItemEditorComponent);
exports.ItemEditorComponent = ItemEditorComponent;
//# sourceMappingURL=item-editor.component.js.map