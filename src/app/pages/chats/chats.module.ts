import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChatsPageRoutingModule } from './chats-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ChatsPage } from './chats.page';
import { TimeAgoPipe } from 'src/app/pipes/time-ago.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsPageRoutingModule,
    TranslateModule
  ],
  declarations: [ChatsPage, TimeAgoPipe]
})
export class ChatsPageModule {}
