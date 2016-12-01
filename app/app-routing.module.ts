import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingComponent }   from './landing/landing.component';
import { ListsComponent }   from './lists/lists.component';
import { ListEditorComponent } from './list-editor/list-editor.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        { path: '', component: LandingComponent },
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'profile/lists/new', component: ListEditorComponent },
        { path: 'profile/lists/:list_id', component: ListEditorComponent },
        { path: '**', component: NotFoundComponent},
	]),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
