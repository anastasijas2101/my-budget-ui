import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from './currency.model';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private apiUrl: string = 'http://localhost:8080/currency'

  constructor(private http: HttpClient) { }

  getCurrency(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.apiUrl);
  }
}
