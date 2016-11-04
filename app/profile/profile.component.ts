import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProfileService } from './../services/profile.service';
import { BroadcastService } from '../services/broadcast.service';

@Component({
  selector: 'profile',
  templateUrl: './app/profile/profile.html',
  styleUrls: [ './app/profile/profile.css' ]
})

export class ProfileComponent {

  profile : any;
  lists: any[];
  days: number[];

  constructor(private route: ActivatedRoute,
		private router: Router,
		private profileService : ProfileService,
    private broadcastService: BroadcastService){}
    

  ngOnInit() {
    this.broadcastService.subscribe('saveGroceryList', (updatedList) => {
      // Update profile here
      alert(id);
    });

    this.days = [];
    for(var i=1; i<365; i++) {
      this.days.push(i);
    }
    
    this.route.params.forEach((params: Params) => {
      // 'profile/:user_id'
			if(params['user_id'] !== undefined) {
        // TODO: handle invalid user_id
				this.profile = this.profileService.getProfile(params['user_id']);
        this.lists = this.profile.lists;
			} else {
				this.profile = {};
        this.lists = [];
			}
		});
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
