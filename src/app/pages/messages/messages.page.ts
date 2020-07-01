import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute, Scroll } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Chooser } from '@ionic-native/chooser/ngx';
import { Socket } from 'ngx-socket-io';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit, AfterViewChecked {

  @ViewChild('content') content: any;

  public online = true;
  public messages = [];
  public userId;
  public chat;
  private page = 1;
  public text = '';
  private flag = true;
  private hasMore = true;
  private apiCall = true;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private chatService: ChatService,
    private imagePicker: ImagePicker,
    private chooser: Chooser,
    private socket: Socket) {
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.userId = params.userId;
        this.chat = JSON.parse(params.chat);
        this.getMessages();
        this.getNotifiedMessages();
      }
    });
  }

  getNotifiedMessages() {
    this.socket.fromEvent(`chat${this.chat.id}`).subscribe( data => {
      console.log(data);
      this.messages.push({
        data : data['data'],
        type : data['type'],
        sender_id : data['userId']
      });
    });
  }

  getMessages() {
    console.log(this.chat.id);
    this.chatService.getMessages(this.chat.id, this.page).subscribe( data => {
      console.log(data);
      if ((data as Array<any>).length === 0) {
        this.hasMore = false;
      }
      this.messages = (data as Array<any>).concat(this.messages);
      this.apiCall = true;
      this.page++;
      this.scrollToBottom();
    });
  }

  send() {
    if (this.text !== '') {
      this.chatService.send({
        data : this.text,
        type : 0,
        chatId : this.chat.id,
        userId : this.userId
      }).subscribe( data => {
        this.messages.push({
          chat_id : this.chat.id,
          data : this.text,
          seen : 0,
          sender_id: this.userId,
          type : 0
        });
        this.text = '';
      });
    }
  }

  uploadImage() {
    this.imagePicker.getPictures({}).then((results) => {
      for (let i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

  uploadVoice() {
    this.chooser.getFile('audio/*,sound/*')
    .then(file => console.log(file ? file.name : 'canceled'))
    .catch((error: any) => console.error(error));
  }

  back() {
    this.router.navigate(['/tabs/chat']);
  }

  scrollToBottom() {
    if (this.flag) {
      this.content.scrollToBottom(300);
    }
  }

  onScroll(event) {
    this.flag = false;
    if (event.detail.scrollTop < 10) {
      if (this.apiCall && this.hasMore) {
        this.apiCall = false;
        this.getMessages();
        console.log('call api');
      }
    }
  }

}
