import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class ListsService {

	lists : any[];
	stores: any[];
	autocompleteUrl: string = "http://138.197.207.203/api/autocomplete/c"
	test: any;

	constructor(private http: Http){
		this.stores = [
            { "store_id": 1, "store_name": "Kroger on Mockingbird"},
            { "store_id": 2, "store_name": "Tom Thumb on Lovers" },
			{ "store_id": 3, "store_name": "Central Market on Lovers" },
			{ "store_id": 4, "store_name": "Whole Foods on Greenback" },

		];

		this.lists = [
            {
                "list_id": 1,
                "store_id": 1,
                "store_name": "Kroger on Mockingbird",
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
                "store_name": "Tom Thumb on Lovers",
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
        ];
	}

	getLists() : any[] {
		return this.lists;
	}

	getList(list_id : number) : any {
		return this.lists[list_id - 1];
	}

	getStores() : any {
		return this.stores;
	}
	saveList(list) {
		if(list.list_id === undefined) {
			list.list_id = this.lists.length + 1;
		}

		this.lists[list.list_id-1] = list;
	}

	getAmountOfItems() : number {
		return this.lists.length;
	}



	// getAutocomplete(): Promise<Test[]> {
	// // getAutocomplete(): any {
	// 	console.log(this.http.get(this.autocompleteUrl).toPromise().then(response => response.json()))
    // 	return this.http.get(this.autocompleteUrl)
    //            .toPromise()
    //            .then(response => response.json().data as Test[]);
	// }

	private extractData(res: Response) {
	    let body = res.json();
		console.log(body);
	    return body.data || { };
	  }

}
