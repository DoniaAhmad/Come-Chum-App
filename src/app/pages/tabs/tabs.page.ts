import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  public tabs = [{
    icon : 'home-outline',
    router : 'home'
  }, {
    icon : 'people-outline',
    router : 'groups'
  }, {
    icon : 'calendar',
    router : 'events'
  }, {
    icon : 'add-circle-outline',
    router : 'create'
  }, {
    icon : 'reader-outline',
    router : 'blogs'
  }, {
    icon : 'chatbox-ellipses-outline',
    router : 'chat'
  }, {
    icon : 'notifications-outline',
    router : 'notifications'
  }];

  constructor(
    private navCtrl: NavController,
    public router: Router,
    private platform: Platform) {
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribe(async () => {
        this.navCtrl.navigateRoot('/tabs/home');
      });
    });
  }

}
