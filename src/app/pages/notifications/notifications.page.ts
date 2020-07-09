import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications.service';
import { UserService } from 'src/app/services/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  public notifications = [];
  private pageId = 1;

  constructor(
    private notificationsService: NotificationsService,
    private user: UserService,
    public translate: TranslateService
    ) { }

  ngOnInit() {
    this.getNotifiations();
  }

  getNotifiations() {
    this.notificationsService.getNotifications(this.user.getData()['id'], this.pageId).subscribe( data => {
      this.notifications = this.notifications.concat(data as Array<any>);
      console.log(data);
      this.pageId++;
    });
    // this.notifications = [
    //   {
    //     image : 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    //     name : 'Apollo Phelps',
    //     body : 'liked your post',
    //     time : '5:30PM'
    //   }, {
    //     image : 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    //     name : 'Cocon Gordon',
    //     body : 'commented on your post',
    //     time : '7:35AM'
    //   }, {
    //     image : 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    //     name : 'Leo Reilly',
    //     body : 'liked your post',
    //     time : 'yesterday'
    //   }
    // ];
  }

}
