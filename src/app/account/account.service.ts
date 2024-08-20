import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl: string = 'http://localhost:8080/accounts'

  constructor(private http: HttpClient) {}

  getAccounts() : Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrl);
  }

  setAccount(accountName: string, balance: number, currency: string) : Observable<any> {
    return this.http.post(this.apiUrl, {accountName, balance, currency})
  }
}
