import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  public groups = [];

  constructor() { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.groups = [{
    }, {
    }, {
    }];
  }

}
