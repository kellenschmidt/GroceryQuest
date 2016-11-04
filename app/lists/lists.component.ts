import { Component, Input } from '@angular/core';

import { ListsService } from './../services/lists.service';


@Component({
	selector: 'lists',
	templateUrl: './app/lists/lists.html',
	styleUrls: ['./app/lists/lists.css']
})

export class ListsComponent {

	lists: any[];

	constructor(private listsService: ListsService) {
		this.lists = listsService.getLists();
	}

}
