import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private apiUrl: string = 'http://localhost:8080/settings'

  constructor(private http: HttpClient) { }

  deleteAllData(): Observable<void> {
    const params = new HttpParams().set('delete', '');
    return this.http.delete<void>(this.apiUrl, {params})
  }
}
