import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData;

  constructor(
    private httpClient: HttpClient,
    private router: Router) { }

  isAuthenticated() {
    return localStorage.getItem('user') != null;
  }

  getData() {
    return JSON.parse(localStorage.getItem('user'));
  }

  setData(data) {
    this.userData = data;
  }

  login(email, password) {
    return this.httpClient.post(`${environment.api}users/auth`, {
      email,
      password
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  register(data) {
    return this.httpClient.post(`${environment.api}users/create`, {
      data
    });
  }

  forget(email) {
    return this.httpClient.post(`${environment.api}users/forget`, {
      email
    });
  }
}
