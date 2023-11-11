import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'navtutorial';
  data = "Hello child from parent"

  message = ''

  // this function is called to recieve data from a child component
  receiveMessage($event: any) {
    this.message = $event
  }
}
