import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(public httpClient: HttpClient) { }

  create(data) {
    return this.httpClient.post(`${environment.api}events/create`,
    data);
  }

  getMembers(eventId, pageId) {
    return this.httpClient.get(`${environment.api}events/members/${eventId}/${pageId}`);
  }

  getEvents(pageId) {
    return this.httpClient.get(`${environment.api}events/all/${pageId}`);
  }

  getEvent(eventId) {
    return this.httpClient.get(`${environment.api}events/event/${eventId}`);
  }
}
