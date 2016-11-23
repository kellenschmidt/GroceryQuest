import { Component, Input } from '@angular/core';

import { ListsService } from './../services/lists.service';
import { BroadcastService } from '../services/broadcast.service';
import { TokenService } from '../services/token.service';



@Component({
	selector: 'lists',
	templateUrl: './app/lists/lists.html',
	styleUrls: ['./app/lists/lists.css']
})

export class ListsComponent {
	token: string;
	lists: any[];

	constructor(private listsService: ListsService,
		private broadcastService: BroadcastService,
		private tokenService : TokenService) {
		this.token = this.tokenService.getToken();

		listsService.getListsAPI(this.token).then(x => {
			this.lists = x.lists;
			console.log(this.lists);
		})


		// this.lists = listsService.getLists();
	}

	ngOnInit() {
		// this.broadcastService.subscribe('saveGroceryList', (updatedList) => {
     //  		this.listsService.saveList(this.token, updatedList);
    	// });
	}

}
