import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { contentHeaders } from '../common/headers';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {

	private _profiles: any[];
	_apiUrl: string = "http://138.197.207.203/api"
	response : any;


	constructor(private http: Http, public router: Router){

        this._profiles = [];
        this._profiles.push({
            "user_id": "asdf32543",
            "username": "andrewterra",
            "firstname": "Andrew",
            "lastname": "Terra",
            "heatmap": {
                1: true,
                2: true,
                3: false,
                4: true,
                7: true,
                8: true,
                12: true,
                13: true,
                14: true,
                21: true,
                26: true,
                35: true,
                36: true,
                37: true,
                38: true,
                43: true,
                48: true,
                49: true,
                56: true,
                57: true,
                58: true,
                68: true,
                69: true,
                70: true,
                74: true,
                75: true,
                77: true,
                80: true,
                81: true,
                86: true,
                87: true,
                365: false,
            }
        });
		this._profiles.push({
            "user_id": "1",
            "username": "defnotbatman",
            "firstname": "Not",
            "lastname": "Batman",
            "heatmap": {
                1: true
            }
        });

    }

	createAuthorizationHeader(headers:Headers, token) {
        headers.append('Authorization', 'Basic ' +
        btoa(`${token}:`));
    }

	getProfileAPI(token) : Promise<any> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
        this.createAuthorizationHeader(headers, token)
        this.response = this.http.get(this._apiUrl + '/profile', { headers: headers }).toPromise().then(x => x.json() as any);
		// console.log(this.response);
        return this.response;
	}

    private getProfileIndex(user_id : string){
		for (var i = this._profiles.length; i--;) {
			var profile = this._profiles[i];
			if(profile.user_id == user_id) return i;
		}
		return -1;
	}

    getProfile(user_id : string) : any {
        var index = this.getProfileIndex(user_id);
		return this._profiles[index];
    }

    getLists(user_id: string): any[] {
        let currentProfile: any = this.getProfile(user_id);
        return currentProfile.lists;
    }

    updateList(user_id: string, list_id: number) {
        let profileIndexToUpdate: number = this.getProfileIndex(user_id);
        let listToUpdate: number = this._profiles[profileIndexToUpdate].lists[list_id]
    }



}
