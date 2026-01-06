import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

private url = 'http://localhost:8081/api/v1/logindatas';
  constructor(private http: HttpClient) { }
  getdata(): Observable<Login[]> {
    return this.http.get<Login[]>(this.url);
  }
}
