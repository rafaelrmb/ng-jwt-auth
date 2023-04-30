import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const endpoint = AUTH_API + 'signin';

    return this.http.post(endpoint, { username, password }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    const endpoint = AUTH_API + 'register';

    return this.http.post(endpoint, { username, email, password }, httpOptions);
  }

  logout(): Observable<any> {
    const endpoint = AUTH_API + 'signout';
    return this.http.post(endpoint, {}, httpOptions);
  }
}
