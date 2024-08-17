import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  isUserLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isUserLoggedIn = localStorage.getItem('id') !== null;
  }

  logOut() {
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }

  title = 'MyBudgetUI';

}
