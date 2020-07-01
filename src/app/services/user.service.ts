import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData;
  private interval = null;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private socket: Socket,
    private localNotifications: LocalNotifications) { }

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
    this.stopheartBeatOnline();
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

  getNotifications() {
    console.log(`user${this.getData().id}`);
    this.socket.fromEvent(`user${this.getData().id}`).subscribe( data => {
      console.log(data);
      this.localNotifications.schedule({
        id: 1000,
        text: data['text'],
        sound: 'file://sound.mp3'
        // title: ''
        // icon: 'http://example.com/icon.png'
        // data: { secret: key }
      });
    });
  }

  heartBeatOnline() {
    if (this.interval == null) {
        this.interval = setInterval(() => {
          if (this.getData()) {
            this.socket.emit('heartbeat' , { user_id : this.getData().id});
          }
        }, 5000);
    }
  }

  stopheartBeatOnline() {
    clearInterval(this.interval);
    this.interval = null;
  }

}
