import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingComponent }   from './landing/landing.component';
import { ListsComponent }   from './lists/lists.component';
import { ListEditorComponent } from './list-editor/list-editor.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
        { path: '', component: LandingComponent },
  		  { path: 'lists', component: ListsComponent },
        { path: 'lists/new', component: ListEditorComponent },
  		  { path: 'lists/:list_id', component: ListEditorComponent },
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent },
/*        { path: 'profile/:user_id', component: ProfileComponent, children: [
          {
            path: 'lists', component: ListEditorComponent, children: [
              { path: 'new', component: ListEditorComponent },
              { path: ':list_id', component: ListEditorComponent },
            ]
          },
          { path: '', component: ProfileComponent },
        ]},*/
        { path: 'profile/:user_id', component: ProfileComponent },
        { path: 'profile/:user_id/lists/new', component: ListEditorComponent },
        { path: 'profile/:user_id/lists/:list_id', 
          component: ListEditorComponent, 
          canDeactivate: [CanDeactivateGuard] },
        { path: '**', component: NotFoundComponent},
	]),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
