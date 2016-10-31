import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {

	profile : any;

	constructor(){

        this.profile = {
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
            "heatmap": [
                [1, false],
                [2, true],
                [365, true]
            ]
        }

    }

    getProfile() : any {
        return this.profile;
    }

}
