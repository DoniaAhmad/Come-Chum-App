import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/services/package.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.page.html',
  styleUrls: ['./packages.page.scss'],
})
export class PackagesPage implements OnInit {

  public packages = [];
  public details_selected = [];
  public seletedIndex = 0;
  public cost = 150;

  public slideOpts = {
    slidesPerView: 1.2,
    spaceBetween: 10
  };

  constructor(
    private packageService: PackageService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.getPackages();
  }

  getPackages() {
    this.packageService.getPackages(this.userService.getData().id).subscribe(data => {
      console.log(data);
      this.packages = data as Array<any>;
      this.details_selected = this.packages[0].details.split('\n');
    });
  }

  select(index) {
    this.seletedIndex = index;
    this.details_selected = this.packages[index].details.split('\n');
  }

}
