import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'to-do-app';
  name: string =   'Lawrecks';
  greetings: string =   '';
  sayHello ():void {
    this.greetings = 'Hii!';
  }
  constructor () {
    this.sayHello();  
  }
}
