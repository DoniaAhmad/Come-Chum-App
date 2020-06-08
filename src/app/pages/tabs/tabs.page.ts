import { Component, OnInit } from '@angular/core';

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
    icon : 'chatbox-ellipses-outline',
    router : 'chat'
  }, {
    icon : 'notifications-outline',
    router : 'notifications'
  }];

  constructor() { }

  ngOnInit() {
  }

}
