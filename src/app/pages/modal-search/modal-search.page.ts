import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { InterestsService } from 'src/app/services/interests.service';
import { LocationsService } from 'src/app/services/locations.service';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.page.html',
  styleUrls: ['./modal-search.page.scss'],
})
export class ModalSearchPage implements OnInit {

  public interests = [];
  public interestsIndeces = [];
  public countries = [];
  public cities = [];
  public from = '';
  public to = '';
  public country = '';
  public city = '';
  public travellers = '';
  private page = 1;

  constructor(
    private modalCtrl: ModalController,
    private translate: TranslateService,
    private interestsService: InterestsService,
    private locationsService: LocationsService,
    private feed: FeedService) {
    this.getInterests();
    this.getCountries();
  }

  ngOnInit() {
  }

  getInterests() {
    this.interestsService.getInterests(this.page).subscribe( data => {
      console.log(data);
      this.interests = data as Array<any>;
      this.interestsIndeces = new Array<boolean>(this.interests.length).fill(false);
      this.page++;
    });
  }

  getCountries(){
    this.locationsService.getCountries(this.translate.currentLang).subscribe( data => {
      this.countries = data as Array<any>;
      console.log(data);
    });
  }

  getCities(countryId) {
    this.locationsService.getCities(countryId, this.translate.currentLang).subscribe( data => {
      this.cities = data as Array<any>;
      console.log(data);
    });
  }

  search() {

    let data = {};
    if (this.from !== '') {
      data['from'] = new Date(this.from).toISOString().split('T')[0];
    }
    if (this.to !== '') {
      data['to'] = new Date(this.to).toISOString().split('T')[0];
    }
    if (this.country !== '') {
      data['country'] = this.country;
    }
    if (this.city !== '') {
      data['city'] = this.city;
    }
    if (this.travellers !== '') {
      data['persons'] = this.travellers;
    }
    let interestsParm = [];
    for (let i = 0 ; i < this.interests.length; i++) {
      if (this.interestsIndeces[i]) {
        interestsParm.push(this.interests[i].id);
      }
    }
    if (interestsParm.length > 0 ) {
      data['interests'] = interestsParm;
    }
    if (Object.keys(data).length > 0) {
      this.modalCtrl.dismiss(data);
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }

  select(index) {
    this.interestsIndeces[index] = !this.interestsIndeces[index];
  }

}
