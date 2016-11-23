import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ListsService } from './../services/lists.service';
import { BroadcastService } from '../services/broadcast.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'list-editor',
  templateUrl: './app/list-editor/list-editor.html',
  styleUrls: [ './app/list-editor/list-editor.css' ]
})

export class ListEditorComponent {
	title : string;
	list: any = {};
	newListItems: any[];
	stores: any[];
    store_id : number;
    indivStore : any = {};
    amount_of_items: number;
    token: string;

	constructor(private route: ActivatedRoute,
				private router: Router,
				private listsService : ListsService,
				private broadcastService: BroadcastService,
                private tokenService : TokenService ){
                    this.token = this.tokenService.getToken();

                    this.listsService.getStoresAPI().then(x => {
                        this.stores = x;
                    });

                }

	ngOnInit() {
		this.route.params.forEach((params: Params) => {



			if(params['list_id'] !== undefined) {

                this.route.params.forEach((params: Params) => {
                    this.listsService.getListAPI(this.token, +params['list_id']).then(x => {
                        this.list = x;
                        this.listsService.getStore(this.list.store_id).then(x => {
                            this.indivStore = x;
                            console.log(this.indivStore);
                        });
                    });

                });


			} else {
				this.list = {
					items: []
				};
				this.newListItems = [];
				this.title = 'New List';
			}
		});
	}

    // ngAfterContentChecked() {
    //     this.store_id = $("#store_id").val();
    //     console.log(this.store_id)
    //     // this.listsService.getStore(this.store_id).then(x => {
    //     //     this.indivStore = x;
    //     // });
    // }

    addList() {
        console.log({token: this.token, store_id: this.list.store_id, title: this.list.title})
        this.listsService.addList(this.token, this.list.store_id, this.list.title).then(x => {
            this.list.list_id = x.list_id;
            console.log(this.list);
        });
    }

	save() {
		this.broadcastService.broadcast('saveGroceryList', this.list);
        console.log(this.list);
        this.listsService.saveList(this.token, this.list);
        this.router.navigateByUrl('profile')
		// this.router.navigate(['../../'], { relativeTo: this.route });
	}

    onChange(value) {
        this.store_id = value;
        this.listsService.getStore(value).then(x => {
            this.indivStore = x;
            console.log(this.indivStore);
        });

    }
}
