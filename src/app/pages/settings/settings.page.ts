import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public items = [
    {
      title : 'settings.account',
      type : 'title',
      external : false
    },
    {
      title : 'settings.edit_profile',
      route : 'edit-profile',
      type : 'subtitle',
      external : false
    },
    {
      title : 'settings.change_password',
      route : 'change-password',
      type : 'subtitle',
      external : false
    },
    {
      title : 'settings.language',
      route : 'language',
      type : 'subtitle',
      external : false
    },
    {
      title : 'settings.other',
      type : 'title',
      external : false
    },
    {
      title : 'settings.privacy_policy',
      route : `${environment.host}terms`,
      type : 'subtitle',
      external : true
    },
    {
      title : 'settings.about_app',
      route : `${environment.host}`,
      type : 'subtitle',
      external : true
    }
  ];

  constructor(
    private iab: InAppBrowser,
    private router: Router,
    public translate: TranslateService,
    ) { }

  ngOnInit() {
  }

  navigate(index) {
    if (this.items[index].external) {
      const browser = this.iab.create(this.items[index].route, '_blank', { toolbar: 'no', location: 'no', zoom: 'no' });
    } else if (this.items[index].route !== undefined) {
      this.router.navigate([this.items[index].route]);
    }
  }

}
