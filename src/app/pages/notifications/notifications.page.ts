import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  public notifications = [];

  constructor() { }

  ngOnInit() {
    this.getNotifiations();
  }

  getNotifiations() {
    this.notifications = [
      {
        image : 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        name : 'Apollo Phelps',
        body : 'liked your post',
        time : '5:30PM'
      }, {
        image : 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        name : 'Cocon Gordon',
        body : 'commented on your post',
        time : '7:35AM'
      }, {
        image : 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        name : 'Leo Reilly',
        body : 'liked your post',
        time : 'yesterday'
      }
    ];
  }

}
