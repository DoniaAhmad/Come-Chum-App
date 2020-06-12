import { Component, OnInit } from '@angular/core';
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
    router : 'create-post'
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

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

}
