import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ListsService } from './../services/lists.service';
import { BroadcastService } from '../services/broadcast.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'list-editor',
  templateUrl: './app/list-editor/list-editor.html',
  styleUrls: [ './app/list-editor/list-editor.css' ]
})

export class ListEditorComponent {
	title : string;
	list: any = {};
	newListItems: any[];
	stores: any[];
    store_id : number;
    indivStore : any = {};
    amount_of_items: number;
    token: string;
    lat: string;
    lng: string;
    zoom: number = 15;
    maxBusyness: number = 0;
	busyness: number[];
	weekdays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	dayOfWeek: string;

	constructor(private route: ActivatedRoute,
				private router: Router,
				private listsService : ListsService,
				private broadcastService: BroadcastService,
                private tokenService : TokenService ){
                    this.token = this.tokenService.getToken();

                    this.listsService.getStoresAPI().then(x => {
                        this.stores = x;
                    });

                }

	ngOnInit() {
		this.route.params.forEach((params: Params) => {



			if(params['list_id'] !== undefined) {

                this.route.params.forEach((params: Params) => {
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


			} else {
				this.list = {
					items: []
				};
				this.newListItems = [];
				this.title = 'New List';
                this.maxBusyness = 0;

			}







		});
	}


    getColumnHeight(height: any): number {
		return ((height/this.maxBusyness)*60)+3;
	}

	setMaxBusyness() {
		for(let i=0; i<this.indivStore.busyness.length; i++) {
			if(this.indivStore.busyness[i] > this.maxBusyness) {
				this.maxBusyness = this.indivStore.busyness[i];
			}
		}
	}

	setBusynessofDay(day: string) {
		let dayNum = this.weekdays.indexOf(day);
		this.busyness = this.indivStore.busyness.slice(dayNum*24, dayNum*24+24);
	}

	setDayOfWeek(newDay: string) {
		this.dayOfWeek = newDay;
		this.setBusynessofDay(newDay);
	}

    getColumnLabel(index: number): string {
		if(index == 0)
			return '';
		if(index == 12)
			return '12p';
		if(index < 12)
			return (index).toString()+"a";
		return (index%12).toString()+"p";
	}

    // ngAfterContentChecked() {
    //     this.store_id = $("#store_id").val();
    //     console.log(this.store_id)
    //     // this.listsService.getStore(this.store_id).then(x => {
    //     //     this.indivStore = x;
    //     // });
    // }

    addList() {
        console.log({token: this.token, store_id: this.list.store_id, title: this.list.title})
        this.listsService.addList(this.token, this.list.store_id, this.list.title).then(x => {
            this.list.list_id = x.list_id;
            console.log(this.list);
        });
    }

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

	async save() {
		this.broadcastService.broadcast('saveGroceryList', this.list);
        console.log(this.list);
        // how to wait for this to return to navigate
        this.listsService.saveList(this.token, this.list)
        await this.sleep(250)
        this.router.navigateByUrl('profile');
		// this.router.navigate(['../../'], { relativeTo: this.route });
	}

    async delete() {
		this.listsService.deleteList(this.token, this.list.list_id)
        await this.sleep(250)
        this.router.navigateByUrl('profile');
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
	listsEqual(array1: any[], array2: any[]): boolean {
		if(array1.length !== array2.length)
			return false;
		for(let i=0; i<array1.length; i++) {
			if(array1[i].name !== array2[i].name)
				return false;
		}
		return true;
	}

    // canDeactivate(): Promise<boolean> | boolean {
	// 	// Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
	// 	if (!this.list || this.listsEqual(this.list.items, this.newListItems)) {
	// 		return true;
	// 	}
	// 	// Otherwise ask the user with the dialog service and return its
	// 	// promise which resolves to true or false when the user decides
	// 	return confirm('Discard changes?');
	// }
}
