import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  public email = '';

  private loadingTranslation = '';
  private requiredDataTranslation = '';
  private wrongTranslation = '';
  private successTranslation = '';

  constructor(
    private usersService: UserService,
    private translate: TranslateService,
    private loadingController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.translate.get(['common.loading', 'common.enter_required_data', 'common.wrong_data', 'forgot.success']).subscribe( data => {
      this.loadingTranslation = data['common.loading'];
      this.requiredDataTranslation = data['common.enter_required_data'];
      this.wrongTranslation = data['common.wrong_data'];
      this.successTranslation = data['forgot.success'];
    });
  }

  async forget() {
    if (this.email !== '') {
      const loading = await this.loadingController.create({
        message: this.loadingTranslation
      });
      await loading.present();
      this.usersService.forget(this.email).subscribe(data => {
        loading.dismiss();
        if (data['status'] === 'success') {
          this.email = '';
          alert(this.successTranslation);
          this.router.navigate(['login']);
        } else {
          alert(this.wrongTranslation);
        }
      });
    } else {
      alert(this.requiredDataTranslation);
    }
  }

}
