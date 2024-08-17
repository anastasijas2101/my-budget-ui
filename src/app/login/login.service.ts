import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl: string = 'http://localhost:8080/users/login'

  constructor(private http: HttpClient) { }

  logIn(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { email, password });
  }
}