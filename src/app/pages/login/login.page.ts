import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

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
    private loadingController: LoadingController) { }

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

}
