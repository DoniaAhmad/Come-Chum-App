import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(public httpClient: HttpClient) { }

  getNotifications(userId, pagegId) {
    return this.httpClient.get(`${environment.api}notifications/all/${userId}/${pagegId}`);
  }

}
