import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { HttpAppComponent }  from './http.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, HttpAppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
