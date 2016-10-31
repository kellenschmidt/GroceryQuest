import { Component } from '@angular/core';

import { ListsService } from './../lists.service';


@Component({
  selector: 'lists',
  templateUrl: './app/lists/lists.html',
  styleUrls: [ './app/lists/lists.css' ]
})

export class ListsComponent {

	lists : any[];

	constructor(private listsService : ListsService){
		this.lists = listsService.getLists();
	}

}
