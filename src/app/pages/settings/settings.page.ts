import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public items = [
    {
      title : 'settings.account',
      type : 'title'
    },
    {
      title : 'settings.edit_profile',
      route : 'edit-profile',
      type : 'subtitle'
    },
    {
      title : 'settings.change_password',
      route : 'change-password',
      type : 'subtitle'
    },
    {
      title : 'settings.language',
      route : 'change-language',
      type : 'subtitle'
    },
    {
      title : 'settings.other',
      type : 'title'
    },
    {
      title : 'settings.privacy_policy',
      route : 'web?p=privacy_policy',
      type : 'subtitle'
    },
    {
      title : 'settings.about_app',
      route : 'web?p=about',
      type : 'subtitle'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
