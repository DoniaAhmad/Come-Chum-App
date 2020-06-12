import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.page.html',
  styleUrls: ['./packages.page.scss'],
})
export class PackagesPage implements OnInit {

  public packages = [];
  public cost = 150;

  public slideOpts = {
    slidesPerView: 1.2,
    spaceBetween: 10
  };

  constructor() { }

  ngOnInit() {
    this.getPackages();
  }

  getPackages() {
    this.packages = [{}, {}, {}];
  }

}
