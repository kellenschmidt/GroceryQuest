import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';


@Component({
  selector: 'signup',
  templateUrl: './app/signup/signup.html',
  styleUrls: [ './app/signup/signup.css' ]
})

export class SignupComponent {

    constructor(public router: Router, public http: Http) {}

    signup(event, username, password) {
        event.preventDefault();
        let body = JSON.stringify({ username, password });
        console.log(body)
        // this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
    }

}
