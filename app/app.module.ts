import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { ListsService } from './lists.service';
import { LandingComponent }   from './landing/landing.component';
import { ListsComponent }   from './lists/lists.component';
import { ListEditorComponent }   from './list-editor/list-editor.component';
import { ItemEditorComponent }   from './item-editor/item-editor.component';

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
  	RouterModule.forRoot([
  		{ path: '', component: LandingComponent },
  		{ path: 'lists', component: ListsComponent },
        { path: 'lists/new', component: ListEditorComponent },
  		{ path: 'lists/:list_id', component: ListEditorComponent }
	])
  ],
  declarations: [
  	AppComponent,
  	LandingComponent,
  	ListsComponent,
  	ListEditorComponent,
    ItemEditorComponent
  ],
  providers: [ ListsService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
