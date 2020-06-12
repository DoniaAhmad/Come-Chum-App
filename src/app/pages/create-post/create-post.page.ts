import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {

  public images = [];

  public slideOpts = {
    slidesPerView: 1,
    spaceBetween: 0
  };

  constructor() { }

  ngOnInit() {
    if (this.images.length > 0) {
      this.slideOpts.slidesPerView = 1.5;
      this.slideOpts.spaceBetween = 30;
    }
  }

  upload() {
    if (this.images.length === 0) {
      this.slideOpts.slidesPerView = 1.5;
      this.slideOpts.spaceBetween = 30;
    }
  }

  create() {

  }

}
