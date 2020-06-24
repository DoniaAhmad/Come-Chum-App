import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(public httpClient: HttpClient) { }

  getPackages(userId) {
    return this.httpClient.get(`${environment.api}packages/all/${userId}`);
  }
}
