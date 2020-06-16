import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email = '';
  public password = '';
  private loadingTranslation = '';
  private requiredDataTranslation = '';
  private wrongTranslation = '';

  constructor(
    private userService: UserService,
    private translate: TranslateService,
    private router: Router,
    private loadingController: LoadingController,
    private firebaseAuthentication: FirebaseAuthentication,
    private auth: AuthService,
    private fb: Facebook,
    private googlePlus: GooglePlus) { }

  ngOnInit() {
    this.translate.get(['common.loading', 'common.enter_required_data', 'common.wrong_data']).subscribe( data => {
      this.loadingTranslation = data['common.loading'];
      this.requiredDataTranslation = data['common.enter_required_data'];
      this.wrongTranslation = data['common.wrong_data'];
    });
  }

  async login() {
    if (this.email !== '' && this.password !== '') {
      const loading = await this.loadingController.create({
        message: this.loadingTranslation
      });
      await loading.present();
      this.userService.login(this.email, this.password).subscribe( data => {
        loading.dismiss();
        console.log(data);
        if (data['status'] === 'success') {
          localStorage.setItem('user', data.toString());
          localStorage.setItem('language', 'en');
          this.email = '';
          this.password = '';
          this.userService.setData(data);
          this.router.navigate(['tabs']);
        } else {
          alert(this.wrongTranslation);
        }
      });
    } else {
      alert(this.requiredDataTranslation);
    }
  }

  forgot() {
    this.router.navigate(['forgot']);
  }

  register() {
    this.router.navigate(['register']);
  }

  loginFb() {
    this.fb.login(['public_profile', 'email'])
    .then((res: FacebookLoginResponse) => alert('Logged into Facebook!'))
    .catch(e => alert('Error logging into Facebook'));
  }

  loginTwitter() {
    // this.auth.TwitterAuth();
    // this.firebaseAuthentication.signInWithTwitter(environment.firebase.twitter.token, environment.firebase.twitter.secret)
    // .then((res: any) => console.log(res));
  }

  loginGoogle() {
    this.googlePlus.login({})
    .then(res => alert(JSON.stringify(res)))
    .catch(err => alert(JSON.stringify(err)));
    // this.firebaseAuthentication.signInWithGoogle(environment.firebase.google.token, environment.firebase.google.secret)
    // .then((res: any) => console.log(res));
  }

}
