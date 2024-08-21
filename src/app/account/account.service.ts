import { HttpClient, HttpParams } from '@angular/common/http';
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

  setAccount(name: string, balance: number, currency: string) : Observable<any> {
    return this.http.post(this.apiUrl, {name, balance, currency})
  }

  getTotalBalance() : Observable<number> {
    const params = new HttpParams().set('balance', '');
    return this.http.get<number>(this.apiUrl, {params})
  }
}
