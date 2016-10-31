import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';


@Component({
  selector: 'login',
  templateUrl: './app/login/login.html',
  styleUrls: [ './app/login/login.css' ]
})

export class LoginComponent {

    constructor(public router: Router, public http: Http) {}

    login(event, username, password) {
        event.preventDefault();
        let body = JSON.stringify({ username, password });
        console.log(body)
        // this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
    }

}
