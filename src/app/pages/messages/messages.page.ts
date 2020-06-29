import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Chooser } from '@ionic-native/chooser/ngx';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  public online = true;
  public messages = [];
  public userId;
  public chat;
  private page = 1;
  public text = '';


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private chatService: ChatService,
    private imagePicker: ImagePicker,
    private chooser: Chooser) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.userId = params.userId;
        this.chat = JSON.parse(params.chat);
        this.getMessages();
      }
    });
  }

  getMessages() {
    console.log(this.chat.id);
    this.chatService.getMessages(this.chat.id, this.page).subscribe( data => {
      console.log(data);
      this.messages = data as Array<any>;
    });
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

  send() {
    if (this.text !== '') {
      this.chatService.send({
        data : this.text,
        type : 0,
        chatId : this.chat.chat_id,
        userId : this.userId
      }).subscribe( data => {
        this.messages.push({
          chat_id : this.chat.chat_id,
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

}
