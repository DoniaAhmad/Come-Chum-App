import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  change(lang) {
    this.translate.use(lang);
  }

}
