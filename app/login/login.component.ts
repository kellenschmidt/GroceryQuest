import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
                this.status = 200;
                this.router.navigateByUrl('profile')
            },
            (err: any) => {
                this.status = err.status;
                this.isValid = false;
            });
    }

}
