import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  numb: string = "";
  bool = true

  clickBut(){
    this.bool = !this.bool
  }
}
