import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {

	private _profiles: any[];
	// _apiUrl: string = "http://138.197.207.203/api"
	_apiUrl: string = "https://groceryquest.party/api"

	response : any;


	constructor(private http: Http){}

	createAuthorizationHeader(headers:Headers, token) {
        headers.append('Authorization', 'Basic ' +
        btoa(`${token}:`));
    }

	getProfileAPI(token) : Promise<any> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
        this.createAuthorizationHeader(headers, token)
        this.response = this.http.get(this._apiUrl + '/profile', { headers: headers }).toPromise().then(x => x.json() as any);
        return this.response;
	}

}
