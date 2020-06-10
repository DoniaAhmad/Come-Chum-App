import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  public online = true;
  public messages = [];
  public userId = 1;


  constructor(private router: Router) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.messages = [{
      text : 'hello',
      sender_id : 1
    }, {
      text : 'hi , how are you ?',
      sender_id : 2
    }, {
      text : 'i am fine thank you',
      sender_id : 1
    }];
  }

  back() {
    this.router.navigate(['/tabs/chat']);
  }

}
