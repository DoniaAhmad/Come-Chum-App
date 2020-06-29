import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(public httpClient: HttpClient) { }

  getCountries(language) {
    console.log(`${environment.api}locations/countries/${language}`);
    return this.httpClient.get(`${environment.api}locations/countries/${language}`);
  }

  getCities(countryId, language){
    console.log(`${environment.api}locations/cities/${countryId}/${language}`);
    return this.httpClient.get(`${environment.api}locations/cities/${countryId}/${language}`);
  }

  getCountry(countryId, language) {
    return this.httpClient.get(`${environment.api}locations/country/${countryId}/${language}`);
  }

  getCity(cityId, language) {
    return this.httpClient.get(`${environment.api}locations/city/${cityId}/${language}`);
  }
}
