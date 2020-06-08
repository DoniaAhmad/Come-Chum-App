import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.page.html',
  styleUrls: ['./modal-search.page.scss'],
})
export class ModalSearchPage implements OnInit {

  public interests = [];
  public interestsIndeces = [];
  public from;
  public to;
  public country;
  public city;
  public travellers;

  constructor(
    private modalCtrl: ModalController,
    private translate: TranslateService) {
    this.getInterests();
    console.log(this.interests);
  }

  ngOnInit() {
  }

  getInterests() {
    this.interests = [{
      name_ar : 'رياضة',
      name_en : 'Sport'
    }, {
      name_ar : 'اقتصاد',
      name_en : 'Politics'
    }, {
      name_ar : 'كرة القدم',
      name_en : 'Football'
    }, {
      name_ar : 'قراءة',
      name_en : 'Reading'
    }];
    this.interestsIndeces = new Array<boolean>(this.interests.length).fill(false);
  }

  getCities(countryId) {
    console.log(countryId);
  }

  search() {
    this.modalCtrl.dismiss({
      from: this.from,
      to: this.to,
      country: this.country,
      city: this.city,
      travellers: this.travellers,
    });
  }

  close() {
    this.modalCtrl.dismiss();
  }

  select(index) {
    this.interestsIndeces[index] = !this.interestsIndeces[index];
  }

}
