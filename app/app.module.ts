import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent }   from './app.component';
import { ListsService } from './lists.service';
import { LandingComponent }   from './landing/landing.component';
import { ListsComponent }   from './lists/lists.component';
import { ListEditorComponent } from './list-editor/list-editor.component';
import { ItemEditorComponent }   from './item-editor/item-editor.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ProfileService } from './profile.service';




@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
  	RouterModule.forRoot([
  		{ path: '', component: LandingComponent },
  		{ path: 'lists', component: ListsComponent },
        { path: 'lists/new', component: ListEditorComponent },
  		{ path: 'lists/:list_id', component: ListEditorComponent },
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'profile/:user_id', component: ProfileComponent},
        { path: 'profile/:user_id/lists/new', component: ListEditorComponent},
        { path: 'profile/:user_id/lists/:list_id', component: ListEditorComponent},
        { path: '/404', component: NotFoundComponent},
        { path: '/*path', redirectTo: '404' }
	]),
    HttpModule
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
    NotFoundComponent
  ],
  providers: [ ListsService, ProfileService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
