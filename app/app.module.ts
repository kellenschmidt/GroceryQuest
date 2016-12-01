import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }   from './app.component';
import { LandingComponent }   from './landing/landing.component';
import { ListsComponent }   from './lists/lists.component';
import { ListEditorComponent } from './list-editor/list-editor.component';
import { ItemEditorComponent }   from './item-editor/item-editor.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ProfileService } from './services/profile.service';
import { BroadcastService } from './services/broadcast.service';
import { TokenService } from './services/token.service';
import { ListsService } from './services/lists.service';

import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
    AppRoutingModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCNiDGEJK09Bb1A_CRi8-bOJwlhKF8ox3g'
    })
  ],
  declarations: [
  	AppComponent,
  	LandingComponent,
  	ListsComponent,
  	ListEditorComponent,
    ItemEditorComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    NotFoundComponent,
  ],
  providers: [ ListsService, ProfileService, BroadcastService, TokenService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
