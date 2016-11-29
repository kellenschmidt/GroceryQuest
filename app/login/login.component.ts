import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { contentHeaders } from '../common/headers';
import { TokenService } from './../services/token.service'




@Component({
  selector: 'login',
  templateUrl: './app/login/login.html',
  styleUrls: [ './app/login/login.css' ]
})

export class LoginComponent {


    response : any;
    token : string;
    status : number = 200;
    isValid: boolean = true;


    constructor( private tokenService: TokenService, private router: Router) {}


    login(username, password) {
        this.response = this.tokenService.login(username, password)
            .then(
            x => {
                this.token = x.token;
                console.log(this.token)
                this.status = 200;
                this.router.navigateByUrl('profile')
            },
            (err: any) => {
                this.status = err.status;
                this.isValid = false;
                // $("#username").css("border-color", "#f45531").css("color", "#f45531");
            });
    }

}
