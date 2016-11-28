import { Component, Input, Output, EventEmitter } from '@angular/core';

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
	lists: any;

	temp: any = {};

	@Output() profileLists = new EventEmitter();
	@Input() get model() {
		return this.temp;
	}

	  set model(lists) {
		  this.temp = lists;
		  console.log(this.temp)
		  console.log(this.profileLists)
		  this.profileLists.emit(this.temp);
	  }



	constructor(private listsService: ListsService,
		private broadcastService: BroadcastService,
		private tokenService : TokenService) {
		this.token = this.tokenService.getToken();

		listsService.getListsAPI(this.token).then(x => {
			this.lists = x.lists;
			this.model = this.lists;
			console.log(this.lists);
		});


		// this.lists = listsService.getLists();
	}



}
