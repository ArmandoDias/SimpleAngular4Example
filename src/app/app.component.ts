import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showHideStatus = 'none';
  showHideWord = 'read';
  showHideExplanation()  {
    this.showHideWord = this.showHideStatus === 'none' ? 'hide' : 'read';
    this.showHideStatus = this.showHideStatus === 'none' ? 'block' : 'none';
  }
}
