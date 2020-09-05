import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../app/app.component.html',
  styleUrls: ['../app/app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  linksList = [
    { title: 'Home', link: 'home'},
    { title: 'About', link: 'about'},
    { title: 'Education', link: 'education'},
    { title: 'Experiance', link: 'experiance' },
    { title: 'Contact', link: 'contact' },
    //{ title: 'Logout', link: 'logout' },
  ];

  constructor(private router: Router) {}

  gotoRoute(page) {
    this.router.navigate([page]);
  }
}

