import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListsService {

    lists: any[];
    _stores: any[];
    _apiUrl: string;

    constructor(private http: Http) {
        this._apiUrl = "http://138.197.207.203/api";

        this._stores = [
            { "store_id": 1, "store": "Kroger on Mockingbird" },
            { "store_id": 2, "store": "Tom Thumb on Lovers" },
            { "store_id": 3, "store": "Central Market on Lovers" },
            { "store_id": 4, "store": "Whole Foods on Greenville" },
            {
                "store_id": 5,
                "store": "Walmart on Skillman",
                "address": "6185 Retail Rd, Dallas, TX 75231",
                "business": [
                    [0, 3], [1, 5], [2, 10], [3, 20], [4, 15], [5, 12], [6, 10], [7, 8], [8, 5], [9, 5]
                ]
            }];

        //this.getListsHttp({"user_id": 1}).then(x => this.lists = x);

        this.lists = [
            {
                "user_id": "asdf32543",
                "list_id": 1,
                "store_id": 5,
                "store": "Walmart on Skillman",
                "items": [
                    {
                        "item_id": 1,
                        "price": 15.43,
                        "coupon": false,
                        "percentoff": 10,
                        "name": "Frosted Flakes",
                        "aisle_num": 1
                    },
                    {
                        "item_id": 2,
                        "price": 3.99,
                        "coupon": false,
                        "percentoff": 0,
                        "name": "PopTarts",
                        "aisle_num": 2
                    },
                    {
                        "item_id": 3,
                        "price": 7.69,
                        "coupon": false,
                        "percentoff": 20,
                        "name": "Lucky Charms",
                        "aisle_num": 3
                    }
                ]
            },
            {
                "user_id": "asdf32544",
                "list_id": 2,
                "store_id": 1,
                "store": "Kroger on Mockingbird",
                "items": [
                    {
                        "item_id": 1,
                        "price": 15.43,
                        "coupon": false,
                        "percentoff": 10,
                        "name": "Frosted Flakes",
                        "aisle_num": 1
                    },
                    {
                        "item_id": 2,
                        "price": 3.99,
                        "coupon": false,
                        "percentoff": 0,
                        "name": "PopTarts",
                        "aisle_num": 2
                    },
                    {
                        "item_id": 3,
                        "price": 7.69,
                        "coupon": false,
                        "percentoff": 20,
                        "name": "Lucky Charms",
                        "aisle_num": 3
                    }
                ]
            },
            {
                "list_id": 3,
                "store_id": 2,
                "store": "Tom Thumb on Lovers",
                "items": [
                    {
                        "item_id": 3,
                        "price": 5.43,
                        "coupon": false,
                        "percentoff": 5,
                        "name": "Fruity Pebbles",
                        "aisle_num": 3
                    },
                    {
                        "item_id": 4,
                        "price": 5.43,
                        "coupon": true,
                        "percentoff": 0,
                        "name": "Bagels",
                        "aisle_num": 4
                    }
                ]
            }
        ];
    }

    getLists(): any[] {
        return this.lists;
    }

    getList(list_id: number): any {
        for (let i = 0; i < this.lists.length; i++) {
            if (this.lists[i].list_id === list_id) {
                return this.lists[i];
            }
        }
    }

    getListIndex(list: any): number {
        for (let i = 0; i < this.lists.length; i++) {
            if (this.lists[i].list_id === list.list_id) {
                return i;
            }
        }
        return this.lists.length;
    }

    getStores(): any {
        return this._stores;
    }

    private getStoreIndex(store_id: string) {
        for (var i = this._stores.length; i--;) {
            var store = this._stores[i];
            if (store.user_id == store_id) return i;
        }
        return -1;
    }

    getStore(store_id: string): any {
        var index = this.getStoreIndex(store_id);
        return this._stores[index];
    }

    saveList(list: any) {
        if (list.list_id === undefined) {
            // Loop through all positive integers until new list_id is set 
            for (var newId = 0;; newId++) {
                // Loop through each of the current list_ids
                for (let i = 0; i < this.lists.length; i++) {
                    // If list_id is already in use skip to next integer
                    if (this.lists[i].list_id === newId) {
                        break;
                    }
                }
                list.list_id = newId;
                break;
            }
        }
        this.lists[this.getListIndex(list)] = list;
    }

deleteList(list: any) {
    this.lists.splice(this.getListIndex(list), 1);
}

getAmountOfItems(): number {
    return this.lists.length;
}

getAutocomplete(data): Promise < any[] > {
    return this.http.get(this._apiUrl + '/autocomplete/' + data)
        .toPromise()
        .then(x => x.json() as any[]);
}

getListsHttp(data: any): Promise < any[] > {
    return this.http.post(this._apiUrl + '/lists/', JSON.stringify(data))
        .toPromise()
        .then(() => data);
}

}
