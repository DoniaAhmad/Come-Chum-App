import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public name = '';
  public email = '';
  public password = '';
  public confirm_password = '';
  public country = '';
  public city = '';
  public gender = '';
  public prefix_phone = '';
  public phone = '';
  public profile_picture = '';
  public cover = '';
  public about = '';
  public postal_code = '';

  public interests = [];
  public interestsIndeces = [];

  private loadingTranslation = '';
  private requiredDataTranslation = '';
  private wrongTranslation = '';

  public page = 1;

  constructor(
    private translate: TranslateService,
    private usersService: UserService,
    private router: Router,
    private loadingController: LoadingController,
    private imagePicker: ImagePicker
  ) { }

  ngOnInit() {
    this.translate.get(['common.loading', 'common.enter_required_data', 'common.wrong_data']).subscribe( data => {
      this.loadingTranslation = data['common.loading'];
      this.requiredDataTranslation = data['common.enter_required_data'];
      this.wrongTranslation = data['common.wrong_data'];
    });
    this.getInterests();
  }

  async create() {
    if (this.page === 1 && this.name !== '' && this.email !== '' && this.password !== ''
    && this.confirm_password !== '' && this.password === this.confirm_password &&
    this.prefix_phone !== '' && this.phone !== '') {
      this.page++;
    } else if (this.page === 2 && this.country !== '' && this.city !== '' && this.gender !== '') {
      this.page++;
    } else if (this.page === 3 || this.page === 4 || this.page === 5) {
      this.page++;
    }else if (this.page === 6) {
      const loading = await this.loadingController.create({
        message: this.loadingTranslation
      });
      await loading.present();
      this.usersService.register({
        name : this.name,
        email : this.email,
        password : this.password,
        prefix : this.prefix_phone,
        phone : this.phone,
        country : this.country,
        city : this.city,
        gender : this.gender,
        profile_picture : this.profile_picture,
        cover : this.cover,
        about : this.about,
        postal_code : this.postal_code
      }).subscribe(data => {
        loading.dismiss();
        console.log(data);
        if (data['status'] === 'success') {
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate(['/tabs']);
        } else {
          alert(this.wrongTranslation);
        }
      });
    }else {
      alert(this.requiredDataTranslation);
    }
  }

  getInterests() {
    this.interests = [{
      name_ar : 'رياضة',
      name_en : 'Sport'
    }, {
      name_ar : 'اقتصاد',
      name_en : 'Politics'
    }, {
      name_ar : 'كرة القدم',
      name_en : 'Football'
    }, {
      name_ar : 'قراءة',
      name_en : 'Reading'
    }];
    this.interestsIndeces = new Array<boolean>(this.interests.length).fill(false);
  }

  select(index) {
    this.interestsIndeces[index] = !this.interestsIndeces[index];
  }

  upload() {
    this.imagePicker.getPictures({}).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

}
