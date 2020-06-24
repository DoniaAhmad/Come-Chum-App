import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public httpClient: HttpClient) { }

  create(data) {
    return this.httpClient.post(`${environment.api}chat/create`,
    data);
  }

  send(data) {
    return this.httpClient.post(`${environment.api}chat/send`,
    data);
  }

  search(query, pageId) {
    return this.httpClient.get(`${environment.api}chat/search/${query}/${pageId}`);
  }

  getChats(userId, pagegId) {
    return this.httpClient.get(`${environment.api}chat/all/1/${pagegId}/${userId}`);
  }

  getMessages(chatId, pageId) {
    return this.httpClient.get(`${environment.api}chat/${chatId}/${pageId}`);
  }
}
