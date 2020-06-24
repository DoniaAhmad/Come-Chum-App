import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  public chats = [];
  private page = 1;

  constructor(
    private router: Router,
    private chatService: ChatService,
    private user: UserService) { }

  ngOnInit() {
    this.getChats();
  }

  getChats() {
    this.chatService.getChats(this.user.getData()['id'], this.page).subscribe(data => {
      console.log(data);
      this.chats = data as Array<any>;
      this.page++;
    });
  }

  openChat(index) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        chat: JSON.stringify(this.chats[index]),
        userId: this.user.getData()['id']
      }
    };
    this.router.navigate(['/messages'], navigationExtras);
  }

}
