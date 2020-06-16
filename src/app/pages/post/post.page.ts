import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  public post;
  comments = [];

  constructor(
    private route: ActivatedRoute
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
      // todo get more comments from api
    }
  }

}
