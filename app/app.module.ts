import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListsService } from './services/lists.service';
import { LandingComponent }   from './landing/landing.component';
import { ListsComponent }   from './lists/lists.component';
import { ListEditorComponent } from './list-editor/list-editor.component';
import { ItemEditorComponent }   from './item-editor/item-editor.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './services/profile.service';
import { BroadcastService } from './services/broadcast.service';

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
    AppRoutingModule,
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
    ProfileComponent
  ],
  providers: [ ListsService, ProfileService, BroadcastService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
