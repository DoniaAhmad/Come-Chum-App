import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  public oldPassword = '';
  public newPassword = '';
  public rePassword = '';

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit() {
  }

  change() {
    
  }

}
