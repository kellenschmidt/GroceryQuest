import { Injectable } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';

@Injectable()
export class ProfileService {

	private _profiles: any[];

	constructor(){

        this._profiles = [];
        this._profiles.push({
            "user_id": "asdf32543",
            "username": "andrewterra",
            "firstname": "Andrew",
            "lastname": "Terra",
            "lists": [
                {
                    "list_id": 1,
                    "store_id": 1,
                    "store": "Kroger on Mockingbird",
                    "items" : [
                        {
                            "item_id": 1,
                            "price": 15.43,
                            "coupon": false,
                            "percentoff": 10,
                            "name": "Frosted Flakes",
                            "location": [
                                123.144, 145.254
                            ]
                        },
                        {
                            "item_id": 2,
                            "price": 3.99,
                            "coupon": false,
                            "percentoff": 0,
                            "name": "PopTarts",
                            "location": [
                                156.532, 563.142
                            ]
                        }
                    ]
                },
                {
                    "list_id": 2,
                    "store_id": 2,
                    "store": "Tom Thumb on Lovers",
                    "items" : [
                        {
                            "item_id": 3,
                            "price": 5.43,
                            "coupon": false,
                            "percentoff": 5,
                            "name": "Fruity Pebbles",
                            "location": [
                                125.144, 145.254
                            ]
                        },
                        {
                            "item_id": 4,
                            "price": 5.43,
                            "coupon": true,
                            "percentoff": 0,
                            "name": "Bagels",
                            "location": [
                                156.532, 563.142
                            ]
                        }
                    ]
                }
            ],
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
    
    private getProfileIndex(user_id : string){
		for (var i = this._profiles.length; i--;) {
			var profile = this._profiles[i];
			if(profile.user_id == user_id) return i;
		}
		return -1;
	}

    getProfile(user_id : string) : any {
        var index = this.getProfileIndex(user_id);
		return this._profiles[index];
    }

}
