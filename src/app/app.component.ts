import { Component } from '@angular/core';
declare const myFunction:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bibliotheca';
  onclick(){
    debugger;
    myFunction();
  }
}
