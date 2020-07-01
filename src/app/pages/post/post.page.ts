import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedService } from 'src/app/services/feed.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  public post;
  public text = '';
  private page = 1;
  comments = [];

  constructor(
    private route: ActivatedRoute,
    private feed: FeedService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['post']) {
        this.post = JSON.parse(params['post']);
        this.getComments();
      }
    });
  }

  getComments() {
    if (this.comments.length === 0) {
      this.comments = this.post.comments_arr;
      console.log(this.comments);
    } else {
      if (this.page === 1) {
        this.comments = [];
      }
      this.feed.load_comment(this.post.id, this.page).subscribe( data => {
        this.comments = data['results'] as Array<any>;
        this.page++;
      });
    }
  }

  send(){
    if (this.text !== '') {
      this.feed.create_comment({
        postId : this.post.id,
        text : this.text,
        userId : this.userService.getData()['id']
      }).subscribe(data => {
        this.comments.push({
          user_image : this.userService.getData()['image'],
          user_name : this.userService.getData()['name'],
          user_id : this.userService.getData()['id'],
          text : this.text,
          profile_id : this.userService.getData()['profile_id'],
          post_id : this.post.id,
          online : 1,
          created_at : new Date()
        });
        this.text = '';
      });
    }
  }

  upload() {

  }

}
