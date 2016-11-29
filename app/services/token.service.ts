import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { contentHeaders } from '../common/headers';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TokenService {

    // _apiUrl: string = "http://138.197.207.203/api"
    _apiUrl: string = "https://groceryquest.party/api"

    response: any;
    code: any;
    token: string;


    constructor(private http: Http, public router: Router) {}

    createAuthorizationHeader(headers:Headers, username, password) {
        headers.append('Authorization', 'Basic ' +
        btoa(`${username}:${password}`));
    }

    login(username, password) : Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.createAuthorizationHeader(headers, username, password)
        this.response = this.http.get(this._apiUrl + '/token', { headers: headers }).toPromise().then(x => x.json() as any);
        this.response.then(x => {
            this.token = x.token;
        })
        return this.response;
    }

    signup(email, first_name, last_name, password) : Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.response = this.http.post(this._apiUrl + '/register', { email: email, first_name: first_name, last_name: last_name, password: password }).toPromise().then(x => x.json() as any);
        this.response.then(x => {
            this.token = x.token;
        })
        return this.response;
    }

    getToken() : string {
        return this.token;
    }

    resetToken() : void {
        this.token = "";
    }

}
