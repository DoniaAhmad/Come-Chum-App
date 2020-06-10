import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  public chats = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.getChats();
  }

  getChats() {
    this.chats = [
      {
        image : 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        name : 'Apollo Phelps',
        body : 'liked your post',
        time : '5:30PM',
        online : true,
        unread : true
      }, {
        image : 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        name : 'Cocon Gordon',
        body : 'commented on your post',
        time : '7:35AM',
        online : false,
        unread : true
      }, {
        image : 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        name : 'Leo Reilly',
        body : 'liked your post',
        time : 'yesterday',
        online : false,
        unread : false
      }
    ];
  }

  openChat(index) {
    this.router.navigate(['/messages']);
  }

}
