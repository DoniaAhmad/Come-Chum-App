import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

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

  constructor(
    private imagePicker: ImagePicker
  ) { }

  ngOnInit() {
    if (this.images.length > 0) {
      this.slideOpts.slidesPerView = 1.5;
      this.slideOpts.spaceBetween = 30;
    }
  }

  upload() {
    this.imagePicker.getPictures({}).then((results) => {
      for (let i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
    if (this.images.length === 0) {
      this.slideOpts.slidesPerView = 1.5;
      this.slideOpts.spaceBetween = 30;
    }
  }

  create() {

  }

}
