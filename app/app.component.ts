import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <another-component *ngIf="flag"></another-component>
  <admin-component></admin-component>
  `,
})
export class AppComponent  { 
  
  name = 'Angular2';
  public flag = true;
  private clickHeading() {
    alert("heading clicked");
  }

 }
