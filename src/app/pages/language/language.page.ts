import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  constructor(
    public translate: TranslateService,
    private navController: NavController) { }

  ngOnInit() {
  }

  change(lang) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
    this.navController.back();
  }

}
