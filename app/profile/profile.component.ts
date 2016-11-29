import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProfileService } from './../services/profile.service';
import { TokenService } from './../services/token.service';
import { ListsService } from './../services/lists.service';


@Component({
  selector: 'profile',
  templateUrl: './app/profile/profile.html',
  styleUrls: [ './app/profile/profile.css' ]
})

export class ProfileComponent {

  profile : any = {};
  days: number[];
  token: string;
  temp: any = {};
  lists: any[];
  i : number;
  j : number;
  numItems : number = 0;
  price : number = 0;

  constructor(private route: ActivatedRoute,
		private router: Router,
		private profileService : ProfileService,
        private tokenService : TokenService,
        private listsService : ListsService ){}


  ngOnInit() {
    this.token = this.tokenService.getToken();
    this.days = [];
    for(var i=1; i<365; i++) {
      this.days.push(i);
    }

    // this.route.params.forEach((params: Params) => {
      // 'profile/:user_id'
			// if(params['user_id'] !== undefined) {
            // if(this.profile == {}) {
                this.profileService.getProfileAPI(this.token).then(
                x => {
                    this.profile = x;
                    console.log(this.profile);
                });

                this.listsService.getListsAPI(this.token).then(x => {
        			this.lists = x.lists;
                    this.countItems();
                    this.countPrice();
        		});

            // }
				// this.profile = this.profileService.getProfile(params['user_id']);
			// } else {
				// this.profile = {};
			// }
		// });
  }


  countItems() {
      for ( this.i = 0; this.i < this.lists.length; this.i++) {
          this.numItems += this.lists[this.i].items.length;
      }
  }

  countPrice() {
      for ( this.i = 0; this.i < this.lists.length; this.i++) {
          for (this.j = 0; this.j < this.lists[this.i].items.length; this.j++) {
              this.price += this.lists[this.i].items[this.j].price;
          }

      }
  }


  isInHeatmap(dayNum: number) : number {
    let arrayIndex: number = this.profile.heatmap.indexOf(dayNum);
    if(arrayIndex === -1) {
      return 0;
    }
    return arrayIndex;
  }


  setHeatSquareStyle(dayNum: number) {
    if(this.isInHeatmap(dayNum))
      return "#168865";
    else
      return "#dbdbdb";
  }

}
