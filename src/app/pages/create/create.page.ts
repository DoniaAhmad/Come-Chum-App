import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { UserService } from 'src/app/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(
    private imagePicker: ImagePicker,
    public user: UserService,
    public translate: TranslateService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  create(index) {
    const routes = ['create-post'];
    this.navCtrl.navigateForward(routes[index]);
  }

}
