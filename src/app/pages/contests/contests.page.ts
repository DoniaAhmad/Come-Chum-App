import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.page.html',
  styleUrls: ['./contests.page.scss'],
})
export class ContestsPage implements OnInit {

  public contests = [];

  constructor() { }

  ngOnInit() {
    this.getContests();
  }

  getContests() {
    this.contests = [{
    }, {
    }, {
    }];
  }

}