import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'newsAPI';
  searchText: any;
  constructor(private router: Router) {}

  keyPress(event: any, searchText: any) {
    if (event.keyCode == 13) {
      this.router.navigate(['/search', { searchText }]);
    }
  }
}
