import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { LoginService } from "./login.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  invalidLogin: boolean = false;

  constructor(private loginService: LoginService, private router: Router){}

  onSubmit(form: NgForm) {
    this.loginService.logIn(form.value.email, form.value.password)
      .subscribe(user => {
        if (user) {
          localStorage.setItem('id', user.id)
          this.router.navigate(['/account'])
        }
        else
          this.invalidLogin = true;
      })
  }
}
