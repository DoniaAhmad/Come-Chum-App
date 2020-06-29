import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  constructor(public httpClient: HttpClient) { }

  getInterests(pagegId) {
    return this.httpClient.get(`${environment.api}interests/all/${pagegId}`);
  }
}
