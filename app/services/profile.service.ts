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

    getProfileHttp(data: string): Promise<any[]>  {
        return this.http.get(this._apiUrl + '/profile/' + data)
		.toPromise()
		.then(x => x.json() as any[]);
    }

}
