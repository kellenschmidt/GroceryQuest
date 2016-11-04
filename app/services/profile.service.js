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
let ProfileService = class ProfileService {
    constructor() {
        this._profiles = [];
        this._profiles.push({
            "user_id": "asdf32543",
            "username": "andrewterra",
            "firstname": "Andrew",
            "lastname": "Terra",
            "heatmap": {
                1: true,
                2: true,
                3: false,
                4: true,
                7: true,
                8: true,
                12: true,
                13: true,
                14: true,
                21: true,
                26: true,
                35: true,
                36: true,
                37: true,
                38: true,
                43: true,
                48: true,
                49: true,
                56: true,
                57: true,
                58: true,
                68: true,
                69: true,
                70: true,
                74: true,
                75: true,
                77: true,
                80: true,
                81: true,
                86: true,
                87: true,
                365: false,
            }
        });
    }
    getProfileIndex(user_id) {
        for (var i = this._profiles.length; i--;) {
            var profile = this._profiles[i];
            if (profile.user_id == user_id)
                return i;
        }
        return -1;
    }
    getProfile(user_id) {
        var index = this.getProfileIndex(user_id);
        return this._profiles[index];
    }
    getLists(user_id) {
        let currentProfile = this.getProfile(user_id);
        return currentProfile.lists;
    }
    updateList(user_id, list_id) {
        let profileIndexToUpdate = this.getProfileIndex(user_id);
        let listToUpdate = this._profiles[profileIndexToUpdate].lists[list_id];
    }
};
ProfileService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map