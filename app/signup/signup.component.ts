import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { contentHeaders } from '../common/headers';
import { TokenService } from './../services/token.service'



@Component({
  selector: 'signup',
  templateUrl: './app/signup/signup.html',
  styleUrls: [ './app/signup/signup.css' ]
})

export class SignupComponent {


    response : any;
    token : string;
    status : number = 200;

    constructor(private tokenService: TokenService, private router: Router) {}

    signup(email, first_name, last_name, password) {

        this.response = this.tokenService.signup(email, first_name, last_name, password)
            .then(
            x => {
                this.token = x.token;
                console.log(this.token)
                this.status = 200;
                this.router.navigateByUrl('profile')
            },
            (err: any) => {
                this.status = err.status;
                $("#email").css("border-color", "#f45531").css("color", "#f45531");
            });

    }

    login(username, password) {
        this.response = this.tokenService.login(username, password)
            .then(
            x => {
                this.token = x.token;
                console.log(this.token)
                this.status = 200;
                this.router.navigateByUrl('profile/asdf32543')
            },
            (err: any) => {
                this.status = err.status;
                $("#username").css("border-color", "#f45531").css("color", "#f45531");
            });
    }

}
