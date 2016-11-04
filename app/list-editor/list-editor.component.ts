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
                console.log(this.listsService.getList(+params['list_id']));
				this.title = this.list.store_name.toString();
			} else {
				this.list = {
					items: []
				};

				this.title = 'New List';
			}
		});
	}

	save() {
		this.broadcastService.broadcast('saveGroceryList', this.list);
		this.listsService.saveList(this.list);
		this.router.navigateByUrl('lists');
	}
}
