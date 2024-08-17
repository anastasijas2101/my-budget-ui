import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {

  endpointData:any = null;
  invalidLogin: boolean = false;

  constructor(private loginService: LoginService, private router: Router){}

  signIn(credentials: any) {
    this.loginService.getData(credentials)
      .subscribe(result => {
        if (result)
          this.router.navigate(['/account'])
        else 
          this.invalidLogin = true;
      })
  }
}
