import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cwh-todo-list';
  constructor(){
    //Without reloading we can see the change in webpage after sometime
    // setTimeout(() => {
    //   this.title = "Changed title";
    // }, 2000);
  }
}
