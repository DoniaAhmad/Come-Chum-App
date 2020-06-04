import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData;

  constructor(public httpClient: HttpClient) { }

  isAuthenticated() {
    return localStorage.getItem('user') != null;
  }

  getData() {
    return localStorage.getItem('user');
  }

  setData(data) {
    this.userData = data;
  }

  login(email, password) {
    return this.httpClient.post(`${environment.api}/users/login`, {
      "email": email,
      "password": password
    });
  }

  register(data) {
    return this.httpClient.post(`${environment.api}/users/create`, {
      data
    });
  }

  forget(email) {
    return this.httpClient.post(`${environment.api}/users/forgot`, {
      "email": email
    });
  }
}
