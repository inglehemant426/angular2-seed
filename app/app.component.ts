import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` {{name}}
  <app-title [subtitle]="subtitle"></app-title>
  <employee-form></employee-form>
  `
})
export class AppComponent  { 

  constructor() {
    console.log("LOG from app.component")
  }  
  name = 'Angular'; 
  subtitle = '(V1)';


}
