import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_DATA } from '../data/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(private http: HttpClient) { }

  fetchFootballers(): Observable<any> {
    return this.http.get(APP_DATA.FOOTBALLERS_URL);
  }

}
