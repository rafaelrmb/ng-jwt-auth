import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicCOntent(): Observable<any> {
    return this.getData('all');
  }

  getUserBoard(): Observable<any> {
    return this.getData('user');
  }

  getModeratorBoard(): Observable<any> {
    return this.getData('mod');
  }

  getAdminBoard(): Observable<any> {
    return this.getData('admin');
  }

  private getData(boardName: string) {
    const endpoint = API_URL + boardName;

    return this.http.get(endpoint, { responseType: 'text' });
  }
}
