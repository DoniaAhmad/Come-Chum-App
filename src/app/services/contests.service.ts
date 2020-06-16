import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContestsService {

  constructor(public httpClient: HttpClient) { }

  create(data) {
    return this.httpClient.post(`${environment.api}contests/create`,
    data);
  }

  getMembers(contestId, pageId) {
    return this.httpClient.get(`${environment.api}contests/members/${contestId}/${pageId}`);
  }

  getContests(pageId) {
    return this.httpClient.get(`${environment.api}contests/all/${pageId}`);
  }

  getContest(contestId) {
    return this.httpClient.get(`${environment.api}contests/contest/${contestId}`);
  }

}
