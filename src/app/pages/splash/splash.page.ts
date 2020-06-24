import { Component, OnInit } from '@angular/core';
import { Subscription, Observable, interval } from 'rxjs';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  subscription: Subscription;

  constructor(
    private router: Router,
    private navCtrl: NavController) { }

  ngOnInit() {
    if (localStorage.getItem('firstTime') == null) {
      const source = interval(1000);
      this.subscription = source.subscribe(val => {
        localStorage.setItem('firstTime', 'false');
        this.navCtrl.navigateRoot('info');
        this.subscription.unsubscribe();
      });
    } else {
      if (localStorage.getItem('user') == null){
        this.navCtrl.navigateRoot('login');
      } else {
        this.navCtrl.navigateRoot('tabs');
      }
    }
  }

}
