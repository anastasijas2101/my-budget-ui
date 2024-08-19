import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl: string = 'http://localhost:8080/transactions'

  constructor(private http: HttpClient) { }

  getAllTransactions() : Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }

  getTransactionsByAccount(accountId: number) : Observable<Transaction[]> {
    let params = new HttpParams().set('accountId', accountId);

    return this.http.get<Transaction[]>(this.apiUrl, {params})
  }
}
