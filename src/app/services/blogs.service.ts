import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(public httpClient: HttpClient) { }

  create(data) {
    return this.httpClient.post(`${environment.api}/blogs/create`,
    data);
  }

  getTrending() {
    return this.httpClient.get(`${environment.api}/blogs/trending`);
  }

  getBlogs(pageId) {
    return this.httpClient.get(`${environment.api}/blogs/all/${pageId}`);
  }

  getBlog(blogId) {
    return this.httpClient.get(`${environment.api}/blogs/blog/${blogId}`);
  }
}
