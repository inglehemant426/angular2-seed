import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AnotherComponent }  from './another.component';
import { AdminComponent }  from './administration/administration.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    AnotherComponent,
    AdminComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
