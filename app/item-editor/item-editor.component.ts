import { Component, Input } from '@angular/core';


import { ListsService } from './../services/lists.service';
import { TokenService } from '../services/token.service';


@Component({
	selector: 'item-editor',
	templateUrl: './app/item-editor/item-editor.html',
	styleUrls: ['./app/item-editor/item-editor.css']
})

export class ItemEditorComponent {

	@Input() model: any[];
	@Input() store: any;
	@Input() list: any;
	@Input() placeholder: string;

	_itemEntry: any;
	token: string;
	autocomplete : any[];
	update : any = {};

	constructor(private listsService : ListsService, private tokenService : TokenService) {
		this.token = this.tokenService.getToken();
		this.placeholder = "Item name...";
		this._itemEntry = {};
	}



	addItem() {
		this.listsService.getAutocomplete($("#autocomplete-input").val(), this.store)
		.then(x =>
		{
			this.update = x[0];
			this.update["position"] = this.model.length + 1;
			// this.update["item_id"] = this.model[this.model.length - 1]["item_id"] + 1;
			this.model.push(this.update)
		});
		// this._itemEntry.list_id = this.model.length + 1;
		// this.model.push(this._itemEntry);
		this._itemEntry = {};
	}

	swapItems(index1: number, index2: number) {
		// Skip swaps for out of range indices
		if(index1 < 0 || index2 >= this.model.length) {
			return;
		}
		// Get element at index2
		let tempItem: any[] = this.model.slice(index2, index2 + 1);
		// Copy element at index1 to element at index2
		this.model.copyWithin(index2, index1, index1 + 1);
		// Set element at index1 equal to element at index2
		this.model[index1] = tempItem[0];
	}

	// Sort json item objects by name using custom compare function
	sortItems() {
		this.model.sort(function(a: any, b: any):number {
			if(a.name < b.name)
				return -1;
			else if (a.name > b.name)
				return 1;
			else
				return 0;
		});
	}

	autoComplete(event) {
		// TODO fix this
        if(event.target.value !== "" && event.keyCode !== 37 && event.keyCode !== 38 && event.keyCode !== 39 && event.keyCode !== 40) {
            this.listsService.getAutocomplete(event.target.value, this.store).then(x => this.autocomplete = x);
        }
    }

}
