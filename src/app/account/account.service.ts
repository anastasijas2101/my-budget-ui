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

  getAccounts(userId: string) : Observable<Account[]> {
    const params = new HttpParams().set('userId', userId);

    return this.http.get<Account[]>(this.apiUrl, {params});
  }

}
