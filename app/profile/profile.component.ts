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
  numItems : number = 0;

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
                });


            // }
				// this.profile = this.profileService.getProfile(params['user_id']);
			// } else {
				// this.profile = {};
			// }
		// });
  }

  noItems() : number {
      for ( this.i = 0; this.i < this.lists.length; this.i++) {
          this.numItems += this.lists[this.i].items.length;
      }
      return this.numItems;
  }

  isInHeatmap(dayNum: number) : boolean {
    return this.profile.heatmap[dayNum];
  }

  setHeatSquareStyle(dayNum: number) {
    if(this.isInHeatmap(dayNum))
      return "blue";
    else
      return "#dbdbdb";
  }

}
