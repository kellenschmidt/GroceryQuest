import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProfileService {

	private _profiles: any[];
    _apiUrl: string;

	constructor(private http: Http){
        this._apiUrl = "http://138.197.207.203/api";

        this._profiles = [];

        //this.getProfileHttp('1').then(x => this._profiles.push(x));

        this._profiles.push({
            "user_id": "asdf32543",
            "username": "andrewterra",
            "firstname": "Andrew",
            "lastname": "Terra",
            "heatmap": [ 
                1, 2, 3, 4, 7, 8, 12, 13, 14, 21, 26, 35, 36, 37, 38, 43, 48, 49, 56, 57, 58, 68, 69, 70, 74, 75, 77, 80, 81, 86, 87, 365,
            ]
        });

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
        let listToUpdate: number = this._profiles[profileIndexToUpdate].lists[list_id];
    }

    getProfileHttp(data: string): Promise<any[]>  {
        return this.http.get(this._apiUrl + '/profile/' + data)
		.toPromise()
		.then(x => x.json() as any[]);
    }

}
