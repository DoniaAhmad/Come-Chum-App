import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(
    public translate : TranslateService,
    private router :  Router) { }

  ngOnInit() {
  }

  continue() {
    this.router.navigate(['/login']);
  }

}
