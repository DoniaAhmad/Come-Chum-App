import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FeedService } from 'src/app/services/feed.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public userData;
  private pageId = 1;
  public posts = [];

  constructor(
    private userService: UserService,
    private feedService: FeedService,
    private navControl: NavController
  ) {
    this.userData = userService.getData();
   }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.feedService.getMyFeed(this.userData['id'], this.pageId).subscribe( data => {
      console.log(data);
      this.posts = data as Array<any>;
      this.pageId++;
    });
  }

  editProfile() {
    this.navControl.navigateForward('edit-profile');
  }

  settings() {
    this.navControl.navigateForward('settings');
  }

}
