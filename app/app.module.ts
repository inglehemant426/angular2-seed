import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// need for Forms , add this in imports array
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HightlightDirective }  from './app.highlight.directive';
import { UserService }  from './app.user.service';
import { TitleComponent }  from './title_component/title.component';
import { EmployeeFormComponent }  from './employee_component/employee.form.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    HightlightDirective,
    TitleComponent,
    EmployeeFormComponent
  ],
  providers: [ UserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  constructor() {
    console.log("LOG from app.module");
  }
}
