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
let ItemEditorComponent = class ItemEditorComponent {
    constructor() {
        this.placeholder = "Item name...";
        this._itemEntry = {};
    }
    addItem() {
        this.model.push(this._itemEntry);
        this._itemEntry = {};
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], ItemEditorComponent.prototype, "model", void 0);
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
    __metadata('design:paramtypes', [])
], ItemEditorComponent);
exports.ItemEditorComponent = ItemEditorComponent;
//# sourceMappingURL=item-editor.component.js.map