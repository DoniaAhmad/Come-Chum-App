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

  getMyFeed(userId, pageId) {
    return this.httpClient.get(`${environment.api}feed/user/${userId}/${pageId}`);
  }

  getFeed(userId, pageId) {
    return this.httpClient.get(`${environment.api}feed/all/${userId}/${pageId}`);
  }

  search(text, pageId): any {
    return this.httpClient.post(`${environment.api}feed/search`, {
      text,
      pageId
    });
  }

  advancedSearch(data, pageId): any {
    return this.httpClient.post(`${environment.api}feed/advancedSearch`, {
      data,
      pageId
    });
  }

  getPost(userId, blogId) {
    return this.httpClient.get(`${environment.api}feed/blog/${userId}/${blogId}`);
  }

  like(data) {
    return this.httpClient.post(`${environment.api}feed/like`,
    data);
  }

  dislike(data) {
    return this.httpClient.post(`${environment.api}feed/dislike`,
    data);
  }

  create_comment(data) {
    return this.httpClient.post(`${environment.api}feed/create_comment`,
    data);
  }

  load_comment(postId, pageId) {
    return this.httpClient.get(`${environment.api}feed/load_comments/${postId}/${pageId}`);
  }

  update(data) {
    return this.httpClient.post(`${environment.api}feed/update`,
    data);
  }

  remove(data) {
    return this.httpClient.post(`${environment.api}feed/remove`,
    data);
  }

}
