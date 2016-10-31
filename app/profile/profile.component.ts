import { Component } from '@angular/core';

import { ProfileService } from './../profile.service'

@Component({
  selector: 'profile',
  templateUrl: './app/profile/profile.html',
  styleUrls: [ './app/profile/profile.css' ]
})

export class ProfileComponent {

    profile : any;

	constructor(private profileService : ProfileService){
		this.profile = profileService.getProfile();
	}


}
