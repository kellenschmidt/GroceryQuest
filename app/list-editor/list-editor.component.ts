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
    amount_of_items: number;

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
				this.title = this.list.store_name.toString();
			} else {
				this.list = {
					items: []
				};
				this.newListItems = [];
				this.title = 'New List';
			}
		});
	}

	save() {
		this.list.items = this.newListItems.slice();
		this.broadcastService.broadcast('saveGroceryList', this.list);
		this.listsService.saveList(this.list);
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
