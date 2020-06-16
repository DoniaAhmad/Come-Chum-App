import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(public httpClient: HttpClient) { }

  create(data) {
    return this.httpClient.post(`${environment.api}groups/create`,
    data);
  }

  getMembers(groupId, pageId) {
    return this.httpClient.get(`${environment.api}groups/members/${groupId}/${pageId}`);
  }

  getGroups(pageId) {
    return this.httpClient.get(`${environment.api}groups/all/${pageId}`);
  }

  getGroup(groupId) {
    return this.httpClient.get(`${environment.api}groups/group/${groupId}`);
  }
}
