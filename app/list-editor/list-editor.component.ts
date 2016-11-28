import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ListsService } from './../services/lists.service';
import { BroadcastService } from '../services/broadcast.service';

@Component({
  selector: 'list-editor',
  templateUrl: './app/list-editor/list-editor.html',
  styleUrls: [ './app/list-editor/list-editor.css' ]
})

export class ListEditorComponent {
	title : string;
	list: any;
	newListItems: any[];
	stores: any[];
	store: any;
	maxBusiness: number = 0;
	business: number[];
	weekdays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	dayOfWeek: string;

	constructor(private route: ActivatedRoute,
				private router: Router,
				private listsService : ListsService,
				private broadcastService: BroadcastService ){}

	ngOnInit() {
		this.route.params.forEach((params: Params) => {

			this.stores = this.listsService.getStores();

			if(params['list_id'] !== undefined) {
				this.list = this.listsService.getList(+params['list_id']);
                this.newListItems = this.list.items.slice();
				this.store = this.getStore(this.list.store_id);
				this.title = this.store.store;
				this.setMaxBusiness();
			} else {
				this.list = {
					items: []
				};
				this.newListItems = [];
				this.store = {};
				this.title = 'New List';
				this.maxBusiness = 0;
			}

			let d = new Date();
			this.setDayOfWeek(this.weekdays[d.getDay()]);
		});
	}

	save() {
		this.list.items = this.newListItems.slice();
		this.broadcastService.broadcast('saveGroceryList', this.list);
		this.listsService.saveList(this.list);
		this.router.navigate(['../../'], { relativeTo: this.route });
	}

	delete() {
		this.listsService.deleteList(this.list);
		this.router.navigate(['../../'], { relativeTo: this.route });
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

	getStore(store_id: number) {
		for(let i=0; i<this.stores.length; i++) {
			if(this.stores[i].store_id === store_id) {
				return this.stores[i];
			}
		}
	}

	getColumnHeight(height: any): number {
		return (height/this.maxBusiness)*60;
	}

	setMaxBusiness() {
		for(let i=0; i<this.store.business.length; i++) {
			if(this.store.business[i] > this.maxBusiness) {
				this.maxBusiness = this.store.business[i];
			}
		}
	}

	setBusinessofDay(day: string) {
		let dayNum = this.weekdays.indexOf(day);
		this.business = this.store.business.slice(dayNum*24, dayNum*24+24);
	}

	setDayOfWeek(newDay: string) {
		this.dayOfWeek = newDay;
		this.setBusinessofDay(newDay);
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

	canDeactivate(): Promise<boolean> | boolean {
		// Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
		if (!this.list || this.listsEqual(this.list.items, this.newListItems)) {
			return true;
		}
		// Otherwise ask the user with the dialog service and return its
		// promise which resolves to true or false when the user decides
		return confirm('Discard changes?');
	}

}
