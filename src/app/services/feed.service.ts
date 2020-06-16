import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(public httpClient: HttpClient) { }

  create(data) {
    return this.httpClient.post(`${environment.api}feed/create`,
    data);
  }

  getFeed(userId, pageId) {
    return this.httpClient.get(`${environment.api}feed/all/${userId}/${pageId}`);
  }

  search(userId, pageId, query) {
    return this.httpClient.get(`${environment.api}feed/search/${userId}/${pageId}/${query}`);
  }

  getPost(userId, blogId) {
    return this.httpClient.get(`${environment.api}feed/blog/${userId}/${blogId}`);
  }
}
