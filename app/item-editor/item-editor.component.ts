import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-editor',
  templateUrl: './app/item-editor/item-editor.html',
  styleUrls: [ './app/item-editor/item-editor.css' ]
})

export class ItemEditorComponent {

	@Input() model: any[];
	@Input() placeholder: string;

	_itemEntry: any;

	constructor(){
		this.placeholder = "Item name...";
		this._itemEntry = {};
	}

	addItem(){
		this.model.push(this._itemEntry);
		this._itemEntry = {};
	}

}
