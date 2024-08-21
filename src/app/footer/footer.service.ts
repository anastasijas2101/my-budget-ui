import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private apiUrl: string = 'http://localhost:8080/transactions'

  constructor(private http: HttpClient) { }

  setTransaction(description: string, amount: number, currency: string, type: string, accountId: number): Observable<any> {
    return this.http.post(this.apiUrl, {description, amount, currency, type, accountId})
  }
}
