import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { FeedService } from 'src/app/services/feed.service';
import { UserService } from 'src/app/services/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post;

  constructor(
    private route: ActivatedRoute,
    private feed: FeedService,
    private user: UserService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['post']) {
        this.post = JSON.parse(params['post']);
      }
    });
  }

  toggleLike() {
    if (!this.post.isliked) {
      this.feed.like({
        postId : this.post.id,
        userId : this.user.getData()['id']
      }).subscribe( data => {
        this.post.isliked = true;
        this.post.likes++;
      });
    } else {
      this.feed.dislike({
        postId : this.post.id,
        userId : this.user.getData()['id']
      }).subscribe( data => {
        this.post.isliked = false;
        this.post.likes--;
      });
    }
  }

  openPost() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
          post: JSON.stringify(this.post)
      }
    };
    this.navCtrl.navigateForward(['post'], navigationExtras);
  }
}
