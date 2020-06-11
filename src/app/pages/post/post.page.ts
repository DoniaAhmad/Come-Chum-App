import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  comments = [];

  constructor() { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.comments = [{}, {}, {}, {}];
  }

}
