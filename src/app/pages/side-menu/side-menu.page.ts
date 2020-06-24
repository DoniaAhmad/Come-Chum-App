import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {

  constructor(
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  navigate(url) {
    this.navCtrl.navigateForward(url);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('language');
    this.navCtrl.navigateRoot('login');
  }

}
