import { Component, Input } from '@angular/core';

import { ListsService } from './../services/lists.service';
import { BroadcastService } from '../services/broadcast.service';


@Component({
	selector: 'lists',
	templateUrl: './app/lists/lists.html',
	styleUrls: ['./app/lists/lists.css']
})

export class ListsComponent {

	lists: any[];

	constructor(private listsService: ListsService,
		private broadcastService: BroadcastService) {
		this.lists = listsService.getLists();
	}

	ngOnInit() {
		this.broadcastService.subscribe('saveGroceryList', (updatedList) => {
      		this.listsService.saveList(updatedList);
    	});
	}

}
