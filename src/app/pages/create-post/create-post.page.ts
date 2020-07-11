import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { UserService } from 'src/app/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { FeedService } from 'src/app/services/feed.service';
import { ModalSearchPage } from '../modal-search/modal-search.page';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {

  public images = [];
  public text = '';

  public slideOpts = {
    slidesPerView: 1,
    spaceBetween: 0
  };

  constructor(
    private imagePicker: ImagePicker,
    public user: UserService,
    public translate: TranslateService,
    private feed: FeedService,
    private modalController: ModalController,
    private navctrl: NavController
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

  async create() {
    if (this.text !== '' || this.images.length > 0) {
      let apiBody = {};
      apiBody['user_id'] = this.user.getData()['id'];
      if (this.text !== '') {
        apiBody['body'] = this.text;
      }
      if (this.images.length > 0) {
        apiBody['images'] = this.images;
      }
      const modal = await this.modalController.create({
        component: ModalSearchPage,
        swipeToClose: true,
      });
      await modal.present();
      const { data } = await modal.onWillDismiss();
      console.log('advanced', data);
      apiBody = Object.assign(apiBody, data);
      console.log(apiBody);
      this.feed.create(apiBody).subscribe( data => {
        console.log(data);
        this.navctrl.pop();
      });
    }
  }

}
