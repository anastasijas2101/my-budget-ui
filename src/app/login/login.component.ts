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

  endpointData:any = null;
  invalidLogin: boolean = false;

  constructor(private loginService: LoginService, private router: Router){}

  onSubmit(form: NgForm) {
    this.loginService.logIn(form.value.email, form.value.password)
      .subscribe(user => {
        console.log(user);
        
        if (user) {
          this.router.navigate(['/account'])
          localStorage.setItem('id', user.id)
        }
        else
          this.invalidLogin = true;
      })
  }
}