import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { contentHeaders } from '../common/headers';


@Component({
  selector: 'login',
  templateUrl: './app/login/login.html',
  styleUrls: [ './app/login/login.css' ]
})

export class LoginComponent {

    _apiUrl: string = "http://138.197.207.203/api"


    constructor(public router: Router, public http: Http) {}

    login(event, username, password) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        // event.preventDefault();
        // let body = JSON.stringify({ username, password });
        // console.log(body)
        let body = {username: username, password: password}
        console.log(body)
        // this.http.post(this._apiUrl + '/login', body, options)
            // .toPromise().then(() => account)
        // this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
    }

}
