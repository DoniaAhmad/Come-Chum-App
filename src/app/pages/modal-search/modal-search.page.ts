import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { InterestsService } from 'src/app/services/interests.service';
import { LocationsService } from 'src/app/services/locations.service';

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
  public from;
  public to;
  public country;
  public city;
  public travellers;
  private page = 1;

  constructor(
    private modalCtrl: ModalController,
    private translate: TranslateService,
    private interestsService: InterestsService,
    private locationsService: LocationsService) {
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
